import './header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img className='headerImg' src="https://files.techmahindra.com/static/img/home-tech-bets-scroll-banner-ai.jpg"
      alt="NO Img"/>
    </div>
  )
}
