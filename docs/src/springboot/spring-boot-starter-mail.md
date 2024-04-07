---
lastUpdated: true
---

# spring-boot-starter-mail 包指南

## 引入 & 配置

maven 仓库

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-mail</artifactId>
</dependency>
```

application.yml 配置

> [!TIP]
> 如果你想，你可以用 properties，我不推荐  
> 绿色的是一般要配置的 property，红色则是一般不需要配置的

```yml
spring:
  mail:
    host: # 主机名， 比如 smtp.example.com // [!code ++]
    port: # 主机端口 // [!code ++]
    username: # SMTP 用户名 // [!code ++]
    password: # SMTP 密码 // [!code ++]
    protocol: # SMTP 服务器的协议 // [!code ++]
    default-encoding: # 默认的编码 // [!code ++]
    properties: # 其他的会话属性 // [!code --]
    jndiName: # JNDI 会话名称，设置之后会优先于其他设置 // [!code --]
```

> 如果你的 host 是一个域名，那么你可以不用配置端口，域名本身会映射主机的某一个端口  
> 如果你的 SMTP 服务商都是耳熟能详的，那么协议和编码基本不用管

## 使用 & 接口参考

在配置完之后，我们需要了解 `mail` 包中最重要的两个类：`JavaMailSender` `MailSender`  
这两个类都可以通过 Spring 注入，但只有配置完以上的关键信息才可注入

```java
// SpringBoot 3.0 之后，所有的 Bean 推荐使用构造方法注入，而不是 @Autowired
// 可以不遵守此约定，只是软性要求
public interface MailSender {

    default void send(SimpleMailMessage simpleMessage) throws MailException {
        send(new SimpleMailMessage[] {simpleMessage});
    }

    void send(SimpleMailMessage... simpleMessages) throws MailException;

}

public interface JavaMailSender extends MailSender {

    MimeMessage createMimeMessage();

    MimeMessage createMimeMessage(InputStream contentStream) throws MailException;

    default void send(MimeMessage mimeMessage) throws MailException {
        send(new MimeMessage[] {mimeMessage});
    }

    void send(MimeMessage... mimeMessages) throws MailException;

    default void send(MimeMessagePreparator mimeMessagePreparator) throws MailException {
        send(new MimeMessagePreparator[] {mimeMessagePreparator});
    }

    default void send(MimeMessagePreparator... mimeMessagePreparators) throws MailException {
        try {
            List<MimeMessage> mimeMessages = new ArrayList<>(mimeMessagePreparators.length);
            for (MimeMessagePreparator preparator : mimeMessagePreparators) {
                MimeMessage mimeMessage = createMimeMessage();
                preparator.prepare(mimeMessage);
                mimeMessages.add(mimeMessage);
            }
            send(mimeMessages.toArray(new MimeMessage[0]));
        }
        catch (MailException ex) {
            throw ex;
        }
        catch (MessagingException ex) {
            throw new MailParseException(ex);
        }
        catch (Exception ex) {
            throw new MailPreparationException(ex);
        }
    }

}
```

由于是开箱即用， 实现类可以不用管，但如果你想参考，位于 `org.springframework.mail.javamail.JavaMailSenderImpl`  
一般情况如果你只想发送简单的邮件，你可以直接使用 `MailSender` 来编写你的功能，  
但如果需要发送复杂类型的邮件，那么就需要 `JavaMailSender` 来编写  
这两个接口都是由同一个实现类实现的

> [!TIP]
> 如果你使用 `MailSender`， 那么你需要了解 `SimpleMailMessage`
> 如果你使用 `JavaMailSender`， 那么你需要了解 `MimeMessage`，`MimeMessageHelper`
