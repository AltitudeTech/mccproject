import React from 'react'

export default class Scripts extends React.Component {
  componentDidMount(){
    let jquery = document.createElement('script')
		jquery.src = '/static/js/jquery-2.1.4.min.js'
		jquery.type = 'text/javascript'
    let moveTop = document.createElement('script')
		moveTop.src = '/static/js/move-top.js'
		moveTop.type = 'text/javascript'
    let easing = document.createElement('script')
		easing.src = '/static/js/easing.js'
		easing.type = 'text/javascript'
    let bootstrap = document.createElement('script')
		bootstrap.src = '/static/js/bootstrap.js'
		bootstrap.type = 'text/javascript'
    let test = document.createElement('script')
		test.src = '/static/js/test.js'
		test.type = 'text/javascript'
    let test2 = document.createElement('script')
		test2.src = '/static/js/test2.js'
		test2.type = 'text/javascript'
    let tawkTo = document.createElement('script')
		tawkTo.src = '/static/js/tawk.to.js'
		tawkTo.type = 'text/javascript'

    document.getElementById('scripts').appendChild(jquery)
    document.getElementById('scripts').appendChild(moveTop)
    document.getElementById('scripts').appendChild(easing)
    document.getElementById('scripts').appendChild(bootstrap)
    document.getElementById('scripts').appendChild(test)
    document.getElementById('scripts').appendChild(test2)
    document.getElementById('scripts').appendChild(tawkTo)
  }

  render(){
    return (
      <div id="scripts"/>
    )
  }
}
