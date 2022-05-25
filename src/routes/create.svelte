<LayoutGrid>

  <Cell spanDevices={{ desktop: 12, tablet: 12, phone: 12 }}>
    <Textfield
      style="width: 100%;"
      variant="outlined"
      bind:value={title}
      label="Title"
      id="title"
      required
    />
  </Cell>

  <Cell spanDevices={{ desktop: 6, tablet: 12, phone: 12 }}>
    <Textfield
      style="width: 100%;"
      bind:value={datetime}
      variant="outlined"
      label="Date/Time"
      type="datetime-local"
      id="datetime"
      required
    />
  </Cell>

  <Cell spanDevices={{ desktop: 6, tablet: 12, phone: 12 }}>
    <Select
      style="width: 100%;"
      variant="outlined"
      label="Category"
      bind:value={category}
      id="category"
      required
    >
      {#each categories as categoryName}
        <Option value={categoryName}>{categoryName}</Option>
      {/each}
    </Select>
  </Cell>

  <Cell spanDevices={{ desktop: 12, tablet: 12, phone: 12 }}>
    <Textfield
      style="width: 100%;"
      variant="outlined"
      bind:value={content}
      textarea
      label="Content"
      id="content"
      required
    />
  </Cell>

  <Cell spanDevices={{ desktop: 12, tablet: 12, phone: 12 }}>
    <div class="submit-wrapper">
      <Button
        class="mdc-typography--button"
        color="secondary"
        on:click={saveFormData}
        variant="unelevated"
        bind:disabled={buttonDisabled}
      >
        <ButtonLabel>Submit</ButtonLabel>
      </Button>
    </div>
  </Cell>

  <Cell spanDevices={{ desktop: 12, tablet: 12, phone: 12 }}>
    <div class="spinner-wrapper">
      {#if spinnerShown}
        <CircularProgress
          style="height: 32px; width: 32px;"
          indeterminate
        />
      {/if}
    </div>
  </Cell>
</LayoutGrid>
  
<Snackbar bind:this={snackbarDisplay}/>

<script lang="ts">
  import type { Entry } from '../models/Entry'

  import LayoutGrid, { Cell } from '@smui/layout-grid'
  import Textfield from '@smui/textfield'
  import Select, { Option } from '@smui/select'
  import Button, { Label as ButtonLabel } from '@smui/button'
  import CircularProgress from '@smui/circular-progress'

  import Snackbar from '../components/Snackbar.svelte'

  const categories = ['General', 'Important', 'Appointments']
  let title = ''
  let datetime = ''
  let category = 'General'
  let content = ''
  let buttonDisabled = false
  let spinnerShown = false

  let snackbarDisplay: any

  const saveFormData = () => {
    console.log('saving')
    buttonDisabled = true
    spinnerShown = true

    setTimeout(() => {
      try {
        let itemId = localStorage.length > 0
          ? (Object.keys(localStorage).map((key) => {return parseInt(key)}).sort((a, b) => {return b - a})[0] + 1).toString() 
          : '0'

        let item: Entry = {
          id: itemId,
          title: (<HTMLInputElement>document.querySelector('#title input')).value,
          datetime: (<HTMLInputElement>document.querySelector('#datetime input')).value,
          category: category,
          content: (<HTMLInputElement>document.querySelector('#content textarea')).value
        }

        localStorage.setItem(
          itemId,
          JSON.stringify(item)
        )

        snackbarDisplay.display('Saved!', 2000)
      } catch (e) {
        console.error(e)
        snackbarDisplay.display('Failed to saved. See console for details.', 2000)
      }

      buttonDisabled = false
      spinnerShown = false
    }, 250)
  }
</script>

<style>
  .submit-wrapper,
  .spinner-wrapper {
    display: flex;
    justify-content: center;
  }
</style>