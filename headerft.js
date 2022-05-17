
const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<style>
#logo img {
   
    width: 70px;
    height: 70px;
    border-radius: 6rem;
    margin:3px 5px;
}
#logo
{
    margin:10px 34px;
}
#navbar{
    display:flex;
    align-items: center;
    position: sticky;
    top:0;
}
#navbar ul{
    display: flex;
    
}
#navbar ul li{
    list-style-type: none;
    font-size: 20px;
}
#navbar ul li a {
    display:block;
    padding:5px 15px;
    border-radius:2rem;
    text-decoration: none;
    color:white;
}
#navbar ul li a:hover{
background-color: white;
    color:black;
}
#navbar::before{
    content:"";
    background-color: black;
    height:100%;
    width:100%;
    z-index:-1;
    opacity:0.7;
    position:absolute;
    top:0px;
    left:0px;
}
</style>
<header>
<nav id="navbar">
            <div id="logo">
                <img src="p.jpg">
            </div>
            <ul class="navbar">
                <li> <a href="#home">HOME</a></li>
                <li><a href="#services-container">SERVICES</a></li>
                <li><a href="#client-section">CLIENTS LOCATION</a></li>
                <li><a href="web.html">CONTACT US</a></li>
            </ul>

        </nav>
        </header>
        `;
        class Header extends HTMLElement {
            constructor() {
              super();
            }
          
            connectedCallback() {
              const shadowRoot = this.attachShadow({ mode: 'closed' });
          
              shadowRoot.appendChild(headerTemplate.content);
            }
          }
          
          customElements.define('header-component', Header);