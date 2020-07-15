$(function () {
	$("#form").submit(function (e) {
		e.preventDefault();
		let response_template = (color, status) => {
			return `
			<div class="${color} text-light rounded p-3 mb-3">
				<h6 class="m-0">${status}</h6>
			</div>
			`;
		};
		let progress_bar = () => {
			return `
			<div class="progress" style='height: 30px !important'>
				<div class="progress-bar progress-bar-striped progress-bar-animated w-100 font-weight-bold" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Processing</div>
			</div>
			`;
		};

		let fd = new FormData(this);
		fd.append("notify-user", true);
		$("button.notify").attr("disabled", true);
		$("#response").html(progress_bar);

		fetch("https://celibate.000webhostapp.com/register.php", {
			method: "POST",
			body: fd,
		})
			.then((res) => res.text())
			.then((res) => {
				setTimeout(() => {
					let fbk =
						res == "successful"
							? response_template("bg-success", "Registration Successful")
							: response_template("bg-danger", res);
					$("#response").html(fbk);
					$("#form")[0].reset();
					$("button.notify").attr("disabled", false);
				}, 1000);
			})
			.catch((err) => {
				$("#response").html(
					response_template("bg-info", "Oops!! An error was encountered.")
				);
				$("button.notify").attr("disabled", false);
			});
	});
});
