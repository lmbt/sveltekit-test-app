<Snackbar
  bind:this={snack}
  timeoutMs={timeout}
>
  <SnackbarLabel>{message}</SnackbarLabel>
  <Actions>
    <IconButton class="material-icons" title="Dismiss">close</IconButton>
  </Actions>
</Snackbar>


<script lang="ts">
  import type { SnackbarComponentDev } from '@smui/snackbar'
  import Snackbar, { Actions, Label as SnackbarLabel } from '@smui/snackbar'
  import IconButton from '@smui/icon-button'

  let snack: SnackbarComponentDev
  
  const defaultMessage = ''
  const defaultTimeout = 4000

  let message: string
  let timeout: number

  export function display(newMessage?: string, newTimeout?: number) {
    let customTimeout = false

    message = typeof newMessage !== 'undefined'
      ? newMessage
      : defaultMessage
    
    if (typeof newTimeout !== 'undefined') {
      if (newTimeout > 0 && newTimeout < 4000) {
        // Custom timeout since component requires > 4000ms timeout
        timeout = -1
        customTimeout = true
      } else {
        // Let component handle the timeout
        timeout = newTimeout
      }
    } else {
      timeout = defaultTimeout
    }

    snack && snack.open()

    if (customTimeout) {
      setTimeout(() => {
        snack.close()
      }, newTimeout)
    }
  }
</script>