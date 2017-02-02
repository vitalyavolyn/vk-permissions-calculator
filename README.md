# Калькулятор прав доступа VK API

```javascript
const vkPermissions = require('vk-permissions-calculator')

vkPermissions.toInt('status,friends,offline') // 66562

vkPermissions.toStr(4107) // 'notify,friends,audio,messages'
```

[Документация](https://vk.com/dev/permissions)
