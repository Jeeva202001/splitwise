import "./App.css";
import food from "./emoji-heart-eyes-fill.svg";
import img from "./img.png";
const cal = () => {
	const hide_button = document.getElementById("hide_button");
	if (hide_button.style.display === "none") {
		hide_button.style.display = "block";
	} else {
		hide_button.style.display = "none";
	}
};
const cal1 = () => {
	const hide_button = document.getElementById("hide_button1");
	if (hide_button.style.display === "none") {
		hide_button.style.display = "block";
	} else {
		hide_button.style.display = "none";
	}
};
const cal2 = () => {
	const hide_button = document.getElementById("hide_button2");
	if (hide_button.style.display === "none") {
		hide_button.style.display = "block";
	} else {
		hide_button.style.display = "none";
	}
};
function App() {
	return (
		<div id="main_container">
			<div>
				<div id="header">
					<img id="profile" alt="lion" src={img} />
					<p id="logo_name">Raise</p>
				</div>
			</div>
			<div id="flex">
				<div id="left_condainer">
					<div>
						<div>
							<button id="sum" onClick={cal}>
								Food EXP
							</button>
						</div>
						<div id="hide_button">
							<ul>
								<li>
									<button>Break fast</button>
								</li>
								<li>
									<button>lunch</button>
								</li>
								<li>
									<button>dinner</button>
								</li>
								<li>
									<button>Others</button>
								</li>
							</ul>
						</div>
					</div>
					<div>
						<div>
							<button id="sum" onClick={cal1}>
								<img src={food}></img>TRAVEL EXP
							</button>
						</div>
						<div id="hide_button1">
							<ul>
								<li>
									<button>Train</button>
								</li>
								<li>
									<button>Bus</button>
								</li>
								<li>
									<button>Auto</button>
								</li>
								<li>
									<button>Taxi</button>
								</li>
							</ul>
						</div>
					</div>
					<div>
						<div>
							<button id="sum" onClick={cal2}>
								Invoices
							</button>
						</div>
						<div id="hide_button2">
							<ul>
								<li>
									<button>Hardware</button>
								</li>
								<li>
									<button>software</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div id="right_condainer"></div>
			</div>
		</div>
	);
}
export default App;
