import CommonNav from './CommonNav'

const Nav = (props) => (
<div className="banner">
  <CommonNav {...props} />
      <section className="slider">
				<div className="flexslider">
					<ul className="slides">
						<li>
							<div className="banner_info">
              <h3>Welcome to My Career Choice</h3>
								<p>Career Choices are Life Choices</p>
							</div>
						</li>
						<li>
							<div className="banner_info">
              <h3>
									Discover a career, that's a <span className="text-success" style={{textShadow: '2px 2px 4px #000000'}}> PERFECT</span> fit for you
								</h3>
								<p>
								Discover Your Personal Strengths & Unique Talents in <span className="text-danger" style={{textShadow: '2px 2px 4px #000000'}}>15 Minutes</span>
								</p>
							</div>
						</li>
						<li>
							<div className="banner_info">
              <h3>Ignite BIG Dreams About Your Future Career Path</h3>
								<p>
									Information on Strengths & Weaknesses
								</p>
							</div>
						</li>
						<li>
							<div className="banner_info">
              <h3>The World's <span className="text-danger" style={{textShadow: '2px 2px 4px #000000'}}>#1</span> Career Decision Making Tool</h3>
								<p>
									Enhance your chances of landing your dream Job
								</p>
							</div>
						</li>
					</ul>
				</div>
			</section>
			<script defer src="/static/js/jquery.flexslider.js"></script>
			<script type="text/javascript" src="/static/js/animateSlider.js"></script>
</div>
)

export default Nav