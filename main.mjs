import { ulid } from 'ulid'
import { v4 as uuid } from 'uuid';

console.time('ulid')
for (let i = 0; i < 10000; i++) {
  // console.log(ulid())
  ulid()
}
console.timeEnd('ulid')

console.time('uuid')
for (let i = 0; i < 10000; i++) {
  // console.log(uuid())
  uuid()
}
console.timeEnd('uuid')
