import { type Component, For, Show, createSignal, createEffect } from "solid-js"
import { parse } from "marked"
import { state } from "../store"
import styles from "./App.module.css"

const ProjectList: Component = () => {
  const [showAll, setShowAll] = createSignal(false)

  createEffect(() => void setShowAll(state.visibleTags.length === 0))

  return (
    <div class={styles.projectlist}>
      <For each={state.projects}>
        {project => (
          <Show when={showAll() || state.visibleTags.some(tag => project.tags.includes(tag))}>
            <div class={styles.project}>
              <h2>{project.name}</h2>
              <div class="space">
                <Show when={project.links}>
                  <ul class="grow">
                    <For each={Object.entries(project.links!)}>
                      {([name, url]) => (
                        <li>
                          <a href={url as string}>{name}</a>
                        </li>
                      )}
                    </For>
                  </ul>
                </Show>
                <div class="space wrap start">
                  <For each={project.tags}>{tag => <div class={styles.tag}>{tag}</div>}</For>
                </div>
              </div>
              <Show when={project.youtube}>
                <iframe
                  src={project.youtube}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Show>
              <Show when={project.pictures}>
                <For each={project.pictures!}>
                  {picture => (
                    <a href={picture} target="_blank">
                      <img src={picture} alt={project.name} loading="lazy" decoding="async" />
                    </a>
                  )}
                </For>
              </Show>
              <div class="contents" innerHTML={parse(project.description)}></div>
              <small class="lighter">{project.created.split("-")[0]}</small>
            </div>
          </Show>
        )}
      </For>
    </div>
  )
}

export default ProjectList
