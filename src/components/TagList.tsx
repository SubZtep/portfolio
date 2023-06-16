import { type Component, For, onMount } from "solid-js"
import { state, setState } from "../store"
import styles from "./App.module.css"

const tags = Array.from(new Set(state.projects.map(project => project.tags).flat())).sort()

const TagList: Component = () => {
  let wrapper: HTMLDivElement | undefined

  onMount(() => {
    setState({ visibleTags: tags })
    wrapper?.querySelectorAll("input").forEach(input => {
      // @ts-ignore
      input.addEventListener("change", ({ target }) => {
        const visibleTags: string[] = []
        wrapper?.querySelectorAll<HTMLElement>("input:checked").forEach(input => visibleTags.push(input.dataset.tag!))
        setState({ visibleTags })
      })
    })
  })

  return (
    <div ref={wrapper} class={styles.taglist}>
      <For each={tags}>
        {tag => (
          <label class={styles.tag}>
            <input type="checkbox" data-tag={tag} />
            {tag}
          </label>
        )}
      </For>
    </div>
  )
}

export default TagList
