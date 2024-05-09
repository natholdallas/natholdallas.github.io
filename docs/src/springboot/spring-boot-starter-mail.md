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

> 如果 host 是一个域名，那么不用配置端口，域名本身会映射主机的某一个端口  
> 如果 SMTP 服务商都是耳熟能详的，那么协议和编码基本可以不用管

## 使用 & 接口参考

在配置完之后，我们需要了解 `mail` 包中最重要的两个接口：`JavaMailSender` `MailSender`  
这两个接口的实例化都可以通过 Spring 注入，但只有配置完以上的关键信息才可注入

```java
public interface MailSender {
}
public interface JavaMailSender extends MailSender {
}
```

接下来是一个 `MailSender` 的简单例子

```java
// SpringBoot 3.0 之后，所有的 Bean 推荐使用构造方法注入，而不是 @Autowired
// 可以不遵守此约定，只是软性要求
public class MailController {
    @Autowired
    private MailSender sender;

    public ResponseEntity<Object> sendEmail() {
        var message = new SimpleMailMessage();
        message.setTo("xxxxxxx@gmail.com", "xxxxxx@qq.com"); // 发送地址，可以一次发送多个不同地址
        message.from = "xxxxxxxx@qq.com"; // 邮箱地址
        message.subject = "This is a test email"; // 标题
        message.text = "hello world"; // 内容
        mailSender.send(message);
        return new ResponseEntity(HttpStatus.OK);
    }
}
```

实现类参考：`org.springframework.mail.javamail.JavaMailSenderImpl`  
如果你只是发送简单的邮件，使用 `MailSender`  
如果需要发送复杂类型的邮件，使用 `JavaMailSender`  
这两个接口都是由同一个实现类实现的

> [!TIP]
> 如果你使用 `MailSender`， 那么需要了解 `SimpleMailMessage`
> 如果你使用 `JavaMailSender`， 那么需要了解 `MimeMessage`，`MimeMessageHelper`
