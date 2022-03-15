import type { Bitdrive as BitdriveCB } from '@web4/typings/callbacks'
import type { Bitdrive as BitdriveP } from '@web4/typings/promises'

declare module "@web4/bitdrive-promise" {
  export default function bitdrivePromise(source: BitdriveCB) : BitdriveP
}
