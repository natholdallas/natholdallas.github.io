# SpringBoot 可以使用的 TypeAlias 参考

```kotlin
import org.springframework.web.bind.annotation.*

/* Class */

typealias Restful = RestController
typealias RestAdvice = RestControllerAdvice
typealias Advice = ControllerAdvice

/* RequestMapping */

typealias Get = GetMapping
typealias Post = PostMapping
typealias Put = PutMapping
typealias Delete = DeleteMapping
typealias Patch = PatchMapping

/* Method Arguments */

typealias Body = RequestBody
typealias Param = RequestParam
typealias Attr = ModelAttribute
typealias Path = PathVariable
```

> [!TIP]
> 😅 [参考链接](https://gist.github.com/NatholDallas/c9cb6edc822a59bb4c00988994bbdf7a)  
> 🥰 [一键下载](https://gist.github.com/NatholDallas/c9cb6edc822a59bb4c00988994bbdf7a/archive/7ef396b51da6f7eeec2cff451c6916d20c9e40e9.zip)
