//rough notation in javascript not working rigt now https://www.youtube.com/watch?v=zc7K0rleBkA
import { annotate, annotationGroup } from "https://unpkg.com/rough-notation?module"

const h1 = document.getElementById("h1")
const a1 = annotate(h1: {type: 'underline', color: 'hotpink'})
a1.show()