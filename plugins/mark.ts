import { defineNuxtPlugin } from '#app';


import hljs  from 'highlight.js';
import mdit from 'markdown-it';

const markdownit = new mdit({
    html:         true,
    xhtmlOut:     false,
    breaks:       false,
    langPrefix:   'language-',
    linkify:      true,
    typographer:  true,
    quotes: '“”‘’',
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs"><code>' +
                 hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                 '</code></pre>';
        } catch (error) {console.log(error)}
      }
  
      return '<pre class="hljs"><code>' + mdit.utils.escapeHtml(str) + '</code></pre>';
    }
  });
  
  markdownit.linkify.set({ fuzzyEmail: false }); 



export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('mdit',markdownit);
});