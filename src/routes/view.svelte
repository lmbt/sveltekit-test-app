<DataTable
  sortable
  bind:sort
  bind:sortDirection
  on:SMUIDataTable:sorted={handleSort}
  table$aria-label="User list"
  style="width: 100%;"
>
  <Head>
    <Row>
      <Cell
        columnId="id"
        style="width:10%;"
      >
        <Label>ID</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      <Cell
        columnId="title"
        style="width:40%;"
      >
        <Label>Title</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      <Cell
        columnId="datetime"
        style="width:20%;"
      >
        <Label>Datetime</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      <Cell
        columnId="category"
        style="width:25%;"
      >
        <Label>Category</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      <Cell
        style="width:5%;"
      >
      </Cell>
    </Row>
  </Head>
  <Body>
    {#each items as item}
      <Panel
        id={parseInt(item.id)}
        title={item.title}
        datetime={item.datetime}
        category={item.category}
        content={item.content}
      />
  {/each}
  </Body>
</DataTable>

<script lang="ts">
  import DataTable, {
    Head,
    Body,
    Row,
    Cell,
    Label,
    SortValue,
  } from '@smui/data-table'
  import IconButton from '@smui/icon-button'
  import { browser } from '$app/env'
  import Panel from '../components/Panel.svelte'

  import type { Entry } from '../models/Entry'

  let items: Entry[] = []

  let sort: keyof Entry = 'id'
  let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending'

  function handleSort() {
    items.sort((a, b) => {
      const [aVal, bVal] = [a[sort], b[sort]][
        sortDirection === 'ascending' ? 'slice' : 'reverse'
      ]();
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return aVal.localeCompare(bVal);
      }
      return Number(aVal) - Number(bVal);
    });
    items = items;
  }

  if (browser) {
    try {
      for (let key in localStorage) {
        let itemString = localStorage.getItem(key)
        if (typeof itemString !== 'undefined' && itemString !== null) {
          let itemData = JSON.parse(itemString)
          let item: Entry = {
            id: itemData.id,
            title: itemData.title,
            datetime: itemData.datetime,
            category: itemData.category,
            content: itemData.content
          }
          items.push(item)
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

</script>

<style>
  :global(.smui-accordion__header__title) {
    padding: 0 !important;
  }
</style>