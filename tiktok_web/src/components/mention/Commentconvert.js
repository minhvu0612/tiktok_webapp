import './styles.scss';

export const convertComment = (comment) => {
  if (comment !== '') {
    let regex = /@\[.+?\]\(.+?\)/gm
    let displayRegex = /@\[.+?\]/g
    let idRegex = /\(.+?\)/g
    let matches = comment.match(regex)
    let arr = []
    matches &&
      matches.forEach((m) => {
        let id = m.match(idRegex)[0].replace('(', '').replace(')', '')
        let display = m
          .match(displayRegex)[0]
          .replace('@[', '')
          .replace(']', '')

        arr.push({ id: id, display: display })
      })
    let newComment = comment.split(regex)
    let output = ''
    for (let i = 0; i < newComment.length; i++) {
      const c = newComment[i]
      if (i === newComment.length - 1) output += c
      else
        output +=
          c +
          `<a class="user-tag__name" href="/users/${arr[i].id}">${arr[i].display}</a>`
    }
    return output
  }
  return null
}
export const convertHashtag = (hashtag) => {
  if (hashtag !== '') {
    let regex = /#\[.+?\]\(.+?\)/gm
    let displayRegex = /#\[.+?\]/g
    let idRegex = /\(.+?\)/g
    let matches = hashtag.match(regex)
    let arr = []
    matches &&
      matches.forEach((m) => {
        let id = m.match(idRegex)[0].replace('(', '').replace(')', '')
        let display = m
          .match(displayRegex)[0]
          .replace('#[', '')
          .replace(']', '')

        arr.push({ id: id, display: display })
      })
    let newHashtag = hashtag.split(regex)
    let output = ''
    for (let i = 0; i < newHashtag.length; i++) {
      const c = newHashtag[i]
      if (i === newHashtag.length - 1) output += c
      else
        output +=
          c +
          `<a class="hashtag__name" href="/hashtags/${arr[i].id}">#${arr[i].display}</a>`
    }
    return output
  }
  return null
}
