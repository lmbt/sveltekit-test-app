
  <div class="app-wrapper">
  <Drawer>
    <Header>
      <Title>Test App</Title>
    </Header>
    <Content>
      <List>
        <Item
          href="{base}/"
        >
          <IconButton class="material-icons">home</IconButton>
          <Text>Home</Text>
        </Item>
        <Item
          href="{base}/create"
        >
          <IconButton class="material-icons">note_add</IconButton>
          <Text>Create</Text>
        </Item>
        <Item
          href="{base}/view"
        >
          <IconButton class="material-icons">note</IconButton>
          <Text>View</Text>
        </Item>
      </List>
    </Content>
  </Drawer>

  <AppContent class="app-content">
    <main class="main-content">
      <PageTransition {url}>
        <slot></slot>
      </PageTransition>
    </main>
  </AppContent>
</div>

<script lang="ts">
  import Drawer, {
    AppContent,
    Content,
    Header,
    Title,
  } from '@smui/drawer'
  import List, { Item, Text } from '@smui/list'
  import IconButton from '@smui/icon-button'
  import PageTransition from '../components/PageTransition.svelte'
  import { base } from '$app/paths'
</script>

<script context="module" lang="ts">
  /** @type {import('@sveltejs/kit').Load} */
  export let url: string
  export const load = async ({url}: {url:string}) => ({ props: {url} });
</script>

<style>
  .app-wrapper {
    position: relative;
    display: flex;
    height: 100%;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
    overflow: hidden;
    z-index: 0;
  }

  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }

  .main-content {
    overflow: auto;
    padding: 16px;
    height: 100%;
    box-sizing: border-box;
  }
</style>