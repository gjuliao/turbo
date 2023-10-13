import { Controller } from "@hotwired/stimulus"
import { Turbo } from "@hotwired/turbo-rails"

// Connects to data-controller="search"
export default class extends Controller {
  connect() {
    this.element.setAttribute('data-action', 'keyup->search#search')
    // console.log('hello')
  }

  search(){
    let params = new URLSearchParams()
    params.append("title", this.element.value)

    fetch(`/?${params}`, {
      method: "GET",
      headers: {
        Accept: "text/vnd.turbo-stream.html"
      }
    })
    .then(r => r.text())
    .then(html => Turbo.renderStreamMessage(html))
   }

}
