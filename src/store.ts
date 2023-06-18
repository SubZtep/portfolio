import { createStore } from "solid-js/store"

export const [state, setState] = createStore({
  visibleTags: [] as string[],
  projects: [
    {
      name: "Kaja",
      tags: ["JavaScript", "React JS"],
      links: {
        Website: "https://kaja.io/",
        GitHub: "https://github.com/SubZtep/kaja#readme"
      },
      created: "2023-06-15",
      pictures: ["/projects/kaja/1.webp"],
      description:
        "Perform a comparison of multiple hand gestures using Web Socket."
    },
    {
      name: "Cursor Bee",
      tags: ["JavaScript", "Web Component"],
      links: {
        Demo: "https://subztep.github.io/cursor-bee/",
        GitHub: "https://github.com/SubZtep/cursor-bee#readme"
      },
      created: "2023-06-15",
      description:
        "Create a Web Component gadget that adds a Unicode bee cursor follower pet."
    },
    {
      name: "Baby Monitor",
      tags: ["Vue.js"],
      links: {
        GitHub: "https://github.com/SubZtep/baby-monitor#readme"
      },
      created: "2021-10-09",
      description:
        "_Progressive Web App_ that should run on an old phone placed in the room with a sleeping baby and enough juice for _Screen Wake Lock API_.\n\nOnce the microphone has a signal and the calculated decibel — via the _Web Audio API_ analyser — reaches the given level several times, the app calls a specified phone number via the [Twilio API](https://www.twilio.com/docs/voice)."
    },
    {
      name: "Depth",
      tags: ["Vue.js"],
      links: {
        GitHub: "https://github.com/SubZtep/depth#readme"
      },
      created: "2021-05-18",
      pictures: ["/projects/Depth/2.webp", "/projects/Depth/1.webp", "/projects/Depth/3.webp"],
      description:
        "Web-app-like app that shares a viewport between 2D web pages and a 3D background scene for easy idea prototyping, a personal playground platform.\n\nContains many separated pages for different purposes, like meta-like lobby, implementing [Tensorflow APIs](https://js.tensorflow.org), commanding _WebGL_ with reactivity, etcetera."
    },
    {
      name: "1_accustic",
      tags: ["NFT"],
      links: {
        Website: "https://www.hicetnunc.xyz/objkt/52229"
      },
      youtube: "https://www.youtube.com/embed/gWbWnjZ6A-s",
      created: "2021-04-22",
      description:
        "A short _CSS_ animation without any script backing is unusal among _NFTs_, but its **cyber** theme and demanding system requirements target the time ahead. Its original goal fulfilled by successfuly minted on a _blockchain_."
    },
    {
      name: "serfozoiroda.hu",
      tags: ["Vue.js", "PHP"],
      links: {
        Website: "https://serfozoiroda.hu/"
      },
      created: "2021-04-18",
      pictures: ["/projects/serfozoiroda.hu/1.webp", "/projects/serfozoiroda.hu/2.webp"],
      description:
        "My brother’s office website — in Hungarian local — with common web components (no pun): various info pages, embedded _OpenStreetMap_ navigation, contact form with its host compatible _PHPMailer_, prepared for both _UTF-8_ and _Latin-2_ messages using the free tier from _Google SMTP_. Even though it’s an _SPA_, all pages are pre-generated locally with _SSG_ and uploaded via _SFTP_. This _CI_ stack is very similar to my first web pages from the early ’90s, immediately it got the maximum _Lighthouse_ performance score."
    },
    {
      name: "Vite Plugin Pug",
      tags: ["JavaScript", "Node.js"],
      links: {
        GitHub: "https://github.com/SubZtep/vite-plugin-pug#readme"
      },
      created: "2021-02-12",
      description:
        "Extend [Vite](https://vitejs.dev/) build tool with [Pug](https://pugjs.org/) template support for _Vanilla JS_ development. Big frameworks are supporting Pug out of the box thereby using this plugin in most cases is superfluous.\n\nIn a feature branch there is a non-stable version that is not in the NPM registry yet that supports hot-module replacement using the [X-Tree Diff+](https://dl.acm.org/doi/10.1007/11802167_104) algorithm for change detection."
    },
    {
      name: "CSS Tetris 3D",
      tags: ["JavaScript"],
      links: {
        Website: "https://subztep.github.io/css-tetris-3d/",
        GitHub: "https://github.com/SubZtep/css-tetris-3d#readme"
      },
      created: "2021-02-11",
      description:
        "CSS 3D perspective experiment that implies the _Tetris_ game. _Tetromino_ aka block movement in a resizable board is implemented with Z-axis rotation."
    },
    {
      name: "My Repos Action",
      tags: ["JavaScript"],
      links: {
        GitHub: "https://github.com/SubZtep/my-repos-action#readme"
      },
      created: "2021-01-24",
      description:
        "[GitHub Action](https://github.com/features/actions) that tetrieve fresh and buried public project list via [GitHub GraphQL API](https://docs.github.com/en/graphql/overview/explorer) and populate this list in reverse-chronological order on a given GitHub profile page."
    },
    {
      name: "Time Passing Lambda Image",
      tags: ["JavaScript", "Lambda Script"],
      links: {
        GitHub: "https://github.com/SubZtep/time-passing-lambda-image#readme"
      },
      created: "2021-01-22",
      description:
        "[Netlify Lambda](https://docs.netlify.com/functions/overview/) that calculates the time distance from a given date and now in formatted **time ago** string. This _serverless function_ returns an embeddable PNG image encoded in base64 format."
    },
    {
      name: "A-Frame Warpspeed Texture",
      tags: ["JavaScript"],
      links: {
        GitHub: "https://github.com/SubZtep/aframe-warpspeed-texture#readme",
        Website: "https://subztep.github.io/aframe-warpspeed-texture/"
      },
      pictures: ["/projects/WarpspeedTexture/1.webp"],
      created: "2020-11-14",
      description:
        "[A-Frame](https://aframe.io/) texture component for _ECS_ that sets real-time calculated animation and is still usable as a texture on any material without blocking the main thread, even I let it tweak until significant FPS drop for (assuming) any desktop or mobile. For its demonstration turn on `useWorker` on the demo page GUI.\n\nTo reach this goal the renderer moved to a worker thread and transferred control to an _OffscreenCanvas_. This technology is still experimental and rarely supported by browsers but shows how easy it will be to gain performance without significant code refactors."
    },
    {
      name: "Flow of Four",
      tags: ["JavaScript", "VR"],
      links: {
        GitHub: "https://github.com/SubZtep/js13k-2020#readme",
        Website: "https://subztep.github.io/js13k-2020/"
      },
      youtube: "https://www.youtube.com/embed/NNTfZmndO8o",
      created: "2020-08-16",
      // blog: "https://demo.land/blog/2020/09/17/flow-of-four-postmortem/",
      description:
        "Unfinished but anyway spacious game jam entry that helped me to gain a better understanding of audio programming and character controlling in a web environment."
    },
    {
      name: "Web Words",
      tags: ["JavaScript", "Browser Plugin"],
      links: {
        Website: "https://subztep.github.io/web-words/",
        GitHub: "https://github.com/SubZtep/web-words#readme"
      },
      created: "2020-06-21",
      description:
        "Browser plugin that imports the entire saved dictionary from _Google Translate_ and shows the translated words on a tooltip on the webpage.\n\n_(On hold until `manifest v3` update.)_"
    },
    {
      name: "WAAπSynth",
      tags: ["React JS"],
      links: {
        GitHub: "https://github.com/SubZtep/synth#readme",
        Website: "https://subztep.github.io/synth/"
      },
      created: "2020-05-23",
      description:
        "_Web Audio API_ synthesizer. Able to generate synthetic sound with one or more oscillators and can connect various audio nodes in a graph until the master output. These created sounds are playable with a basic sequencer implementation. All audio calculations are happening in _Worklet_ threads.\n\nIts early version even used _React_ components as real-time audio nodes in the graph but the timing was inaccurate, even a few milliseconds mismatch could be disturbing in dance music. Working and filtering high sample rates audio is probably better with precompiled code, like _Rust_ to _WebAssembly_."
    },
    {
      name: "Twitter Bot",
      tags: ["JavaScript", "Node.js"],
      links: {
        GitHub: "https://github.com/SubZtep/twitter-bot#readme"
      },
      created: "2019-12-30",
      description:
        "Classic _Twitter_ follower/unfollower bot that prepared for automatised workflow. Blacklist its reached users to prevent user annoyance caused by the limitless interruption. I have mixed feelings about this kind of gray area marketing tools, this script is for demonstration purpuses only (for the good)."
    },
    {
      name: "Depend On",
      tags: ["JavaScript", "Node.js"],
      links: {
        GitHub: "https://github.com/SubZtep/depend-on#readme"
      },
      created: "2019-12-10",
      description:
        "Iterate through an NPM package tree from a given start point, using an asynchronous generator. Using the same `semver` package for  semantic versioningc as the registry, acquired for better compatibility."
    },
    {
      name: "Chat Bot",
      tags: ["JavaScript", "Node.js"],
      links: {
        GitHub: "https://github.com/SubZtep/chatbot"
      },
      created: "2019-04-17",
      description:
        "[Discord](https://discord.com) chatbot boileroplate, using [Dialogflow agent](https://developers.google.com/assistant/df-asdk/localization/agents?hl=uk) as conversation partner."
    },
    {
      name: "JSON City",
      tags: ["JavaScript"],
      links: {
        GitHub: "https://github.com/SubZtep/JsonCity",
        Website: "https://json.city/"
      },
      created: "2018-09-20",
      description: "JSON validator and parser page, minimalist by intention without any 3rd-party requests."
    },
    {
      name: "Whirled on the Spirit Spiral",
      tags: ["JavaScript", "VR"],
      links: {
        // blog: "https://demo.land/blog/2018/10/02/whirled-js-game-jam-code/",
        Website: "https://subztep.github.io/js13k-2018/dist/",
        GitHub: "https://github.com/SubZtep/js13k-2018"
      },
      created: "2018-08-19",
      description: "Motion controlled WebVR entry for JS13K game jam."
    },
    {
      name: "Road Pump",
      tags: ["Unity3D"],
      links: {
        // blog: "https://demo.land/blog/2018/05/13/ludum-dare-41/",
        Website: "https://subztep.itch.io/road-pump"
      },
      youtube: "https://www.youtube.com/embed/9bFcMNmdp6E",
      created: "2018-08-19",
      pictures: ["/projects/RoadPump/1.webp", "/projects/RoadPump/2.webp"],
      description:
        "Built alongside with my designer partner for the _Ludum Dare 41_ game jam. Rhythm game, we made it in only three days from scratch. The test music was left in the game since we didn’t have time to write something catchy. Also it’s not really a rhythm game but the player has to imitated my close-to-deadline #[o rhythmless] run."
    },
    {
      name: "SQLite Manager",
      tags: ["Unity3D"],
      links: {
        GitHub: "https://github.com/SubZtep/SQLiteManager"
      },
      created: "2017-12-15",
      description: "_SQLite_ plugin for _Unity3D_ that solve basic _ORM_ tasks.."
    },
    {
      name: "The Hunger Maims",
      tags: ["Unity3D"],
      links: {
        // blog: "https://demo.land/blog/2017/12/16/ludum-dare-40/",
        Website: "https://subztep.itch.io/the-hunger-maims"
      },
      GitHub: "https://github.com/SubZtep/Ludum-Dare-40",
      created: "2017-12-05",
      pictures: [
        "/projects/TheHungerMaims/4.webp",
        "/projects/TheHungerMaims/1.webp",
        "/projects/TheHungerMaims/2.webp",
        "/projects/TheHungerMaims/3.webp"
      ],
      description:
        "For Ludum Dare 40 gamejam, all assets made by my designer partner and me including digitalized sound effects."
    },
    {
      name: "While Fly",
      tags: ["Unity3D"],
      links: {
        // blog: "https://demo.land/blog/tag/whilefly/",
        Website: "https://subztep.itch.io/whilefly"
      },
      youtube: "https://www.youtube.com/embed/-sVrlWMjpkw",
      created: "2017-11-28",
      pictures: [
        "/projects/WhileFly/1.webp",
        "/projects/WhileFly/2.webp",
        "/projects/WhileFly/3.webp",
        "/projects/WhileFly/4.webp"
      ],
      description: "Mobile game that has been released to all modern mobile platforms."
    },
    {
      name: "PersistData",
      tags: ["Unity3D"],
      links: {
        GitHub: "https://github.com/SubZtep/PersistData"
      },
      created: "2017-11-11",
      description:
        "Persistent store data at runtime to share data between scenes. Basically it's a C# Hashmap holded in a singleton object."
    },
    {
      name: "Help to Find Cats",
      tags: ["Unity3D", "VR"],
      links: {
        // blog: "https://demo.land/blog/2016/05/02/help-to-find-cats/",
        Website: "https://devpost.com/software/help-to-find-cats"
      },
      youtube: "https://www.youtube.com/embed/nBl_EjoRGrE",
      created: "2016-04-24",
      description: "Cartboard VR experiemnce made for the Global Archiact Jam."
    },
    {
      name: "PHP Cron",
      tags: ["PHP"],
      links: {
        GitHub: "https://github.com/SubZtep/php-cron"
      },
      created: "2015-12-28",
      description:
        "This script is able to execute other scripts. Frequently like crontab but able to start new process in each seconds."
    },
    {
      name: "GIF Animation Preview",
      tags: ["PHP", "JavaScript"],
      links: {
        Website: "https://wordpress.org/plugins/gif-animation-preview/",
        GitHub: "https://github.com/SubZtep/gif-animation-preview"
      },
      created: "2015-01-01",
      description:
        "_WordPress_ plugin that finds every GIF animation in a post and replaces it with an auto-generated preview image from the first frame of the animation and saves it to the post’s media directory. Tweakable smooth effect between the preview and animation while lazy loading big animation data on mobiles."
    },
    {
      name: "Modell",
      tags: ["PHP"],
      links: {
        GitHub: "https://github.com/SubZtep/modell"
      },
      created: "2014-11-23",
      description: "A PHP class for easily create/update/load database entries."
    },
    {
      name: "FacePlayer",
      tags: ["PHP", "JavaScript"],
      links: {
        GitHub: "https://github.com/SubZtep/faceplayer"
      },
      created: "2012-02-29",
      description: "Music player that retreive posted musics from Facebook groups and organised them into playlists."
    }
  ]
})
