<Row
  class="accordion-trigger"
  on:click={toggle}
>
  <Cell>{ id }</Cell>
  <Cell>{ title }</Cell>
  <Cell>{ datetime }</Cell>
  <Cell>{ category }</Cell>
  <Cell>
    <IconButton toggle pressed={panelOpened}>
      <Icon class="material-icons" on>expand_less</Icon>
      <Icon class="material-icons">expand_more</Icon>
    </IconButton>
  </Cell>
</Row>
<Row class="accordion-content">
  <Cell
    style="padding:0;"
    colSpan="5"
  >
    <Accordion
      multiple
      class="table-accordion"
    >
      <Panel bind:open={panelOpened}>
        <Header style="padding:0;">
          <DataTable style="width:100%; height:100%;">
            <Body>
              <Row>
                <Cell>{ id }</Cell>
                <Cell>{ title }</Cell>
                <Cell>{ datetime }</Cell>
                <Cell>{ category }</Cell>
                <Cell>
                  <IconButton slot="icon" toggle pressed={panelOpened}>
                    <Icon class="material-icons" on>expand_less</Icon>
                    <Icon class="material-icons">expand_more</Icon>
                  </IconButton>
                </Cell>
              </Row>
            </Body>
          </DataTable>
        </Header>
        <Content>
          { content }
        </Content>
      </Panel>
    </Accordion>
  </Cell>
</Row>

<script lang="ts">
  import DataTable, {
    Body,
    Row,
    Cell,
  } from '@smui/data-table'
  import Accordion, { Panel, Header, Content } from '@smui-extra/accordion'
  import IconButton, { Icon } from '@smui/icon-button'

  let panelOpened = false

  export let id: number
  export let title: string
  export let datetime: string
  export let category: string
  export let content: string

  export function toggle() {
    console.log('toggle panel')
    panelOpened = panelOpened
      ? false
      : true 
  }
</script>

<style>
  :global(.accordion-trigger:hover) {
    background-color: rgba(0, 0, 0, 0.04);
  }
  :global(.accordion-content) {
    height: auto;
  }
  :global(.accordion-content .smui-accordion__header) {
    display: none !important;
  }
  :global(.accordion-content .mdc-data-table__cell) {
    border: none;
  }
  :global(.accordion-content .smui-paper__content[aria-hidden="false"]) {
    border-bottom: 1px solid rgba(0,0,0,.12);
  }
  :global(.accordion-trigger .mdc-icon-button) {
    opacity: 1;
  }
</style>