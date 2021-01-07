$(document).ready(function () {
	$(".dt").DataTable();
	$("#hamburger").click(function () {
		$("#sidebar, #content").toggleClass("active");
	});
	$("div[for='toggle-password']").click(function () {
		let input = $(this).siblings("input");
		input.prop("type") == "password"
			? input.prop("type", "text")
			: input.prop("type", "password");
	});
	$(".select-all").click(function () {
		let checkbox = $(this).parents(".dt").find(":checkbox");
		checkbox.prop("checked") == true
			? checkbox.prop("checked", true)
			: checkbox.prop("checked", false);
	});

	// chart for campaigns page
	let echartElemBar = document.getElementById("echartBar");
	if (echartElemBar) {
		let echartBar = echarts.init(echartElemBar);
		echartBar.setOption({
			grid: {
				left: "8px",
				right: "8px",
				bottom: "0",
				containLabel: true,
			},
			tooltip: {
				show: true,
				backgroundColor: "rgba(0, 0, 0, .8)",
			},
			xAxis: [
				{
					type: "category",
					data: [
						"Jan",
						"Feb",
						"Mar",
						"Apr",
						"May",
						"Jun",
						"Jul",
						"Aug",
						"Sept",
						"Oct",
						"Nov",
						"Dec",
					],
					axisTick: {
						alignWithLabel: true,
					},
					splitLine: {
						show: false,
					},
					axisLine: {
						show: true,
					},
				},
			],
			yAxis: [
				{
					type: "value",
					axisLabel: {
						formatter: "{value}",
					},
					min: 0,
					max: 4000,
					interval: 1000,
					axisLine: {
						show: false,
					},
					splitLine: {
						show: true,
						interval: "auto",
					},
				},
			],

			series: [
				{
					data: [
						500,
						1900,
						3300,
						2500,
						2000,
						3300,
						4000,
						1800,
						3200,
						2700,
						1400,
						2000,
					],

					type: "line",
					smooth: true,
					markArea: {
						label: {
							show: true,
						},
					},
					areaStyle: {
						color: {
							type: "linear",
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [
								{
									offset: 0,
									color: "#FFF2F7", // color at 0% position
								},
								{
									offset: 1,
									color: "#FFC5DA", // color at 100% position
								},
							],
							global: false, // false by default
						},
						origin: "start",
					},
					lineStyle: {
						color: "#FFC5DA",
					},
					itemStyle: {
						color: "#FFC5DA",
					},
				},
			],
		});
		$(window).on("resize", function () {
			setTimeout(() => {
				echartBar.resize();
			}, 500);
		});
	}
});
