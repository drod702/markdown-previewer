function updatePreview() {
    let previewValue = document.getElementById('preview');
    let editorValue = document.getElementById('editor').value;
    let markedUpHtml = marked.parse(editorValue)

    return previewValue.innerHTML = markedUpHtml
}

function setDefault() {
    let defaultText = `\
# My Markdown Previewer 
## by drod702
[to learn more visit [drod702.com](https://www.drod702.com)

**This is bolded text**

This is some code: \`echo something\`

\`\`\`
This is a code block 
and another line of the code block
\`\`\`

- This is an unordered list item 
- This is another unordered list item
- This is a final unordered list item 

1. This is an ordered list item
2. This is another ordered list item
3. This is a final ordered list item

> This is a blockquote. If you type a lot of things, it will still wrap properly, which makes it awesome! 

![Image of react](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png)

    `;
    let editorTextarea = document.getElementById('editor');
    let previewValue = document.getElementById('preview');
    editorTextarea.value = defaultText;
    previewValue.innerHTML = marked.parse(defaultText)
}