import { $loading, appLoadEnd } from './public'

$loading.on(appLoadEnd, () => false)
