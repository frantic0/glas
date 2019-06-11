import {Layers} from './core/Layers'
import {log} from './imports'

export function main(): void {
	const a = new Layers()
	a.set(12)
	const b = new Layers()
	b.set(12)

	assert(a.test(b), 'test method failed')

	assert(a.test2(2), 'test2 failed')
	assert(!a.test2(null), 'test2 failed')

	log('all good!')
}
