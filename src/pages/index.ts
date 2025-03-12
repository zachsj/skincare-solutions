export * from './home/Home'

export * from './blog/Blog'

export * from './resources/Resources'

export * from './faq/Faq'


/* acting as a barrel file. Its purpose is to simplify imports by re-exporting all page components.
so that in index.tsx you can just do..
import { Home, Blog, Resources, Faq } from '../pages'
instead of..
import { Home } from '../pages/home/Home'
import { Blog } from '../pages/blog/Blog'
import { Resources } from '../pages/resources/Resources'
import { Faq } from '../pages/faq/Faq' */