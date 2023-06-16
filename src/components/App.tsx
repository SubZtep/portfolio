import ProjectList from "./ProjectList"
import TagList from "./TagList"
import styles from "./App.module.css"

export default () => (
  <>
    <p class="my1">
      Hey there! Take a look at some of my online side projects. Thanks for dropping by!
    </p>

    <fieldset class={styles.tags}>
      <legend>
        Project Tags
        <sup>
          <small>
            <a href="#section1">*</a>
          </small>
        </sup>
      </legend>
      <TagList />
    </fieldset>

    <ProjectList />

    <small>
      <p id="section1">
        [1] In addition to React, you can also discover SolidJS projects labeled under the <strong>React JS</strong>{" "}
        tag, as well as TypeScript projects categorized under the <strong>JavaScript</strong> tag.
      </p>
    </small>
  </>
)
