const btn = document.querySelector(".test-btn");
btn.addEventListener("click", click);

function click() {
  const result = fetch(
    "https://proxy.cors.sh/https://azienda2.staging.re2n.app/api/auth/sessions'",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-cors-api-key": "temp_4cc195e07f15a84cb4fe6faaab736d78",
      },
      body: JSON.stringify({
        Email: "test@re2n.com",
        Password: "Testre2n12342023!",
      }),
    }
  ).then(function (response) {
    if (response.status === 200) {
      fetch(
        "https://proxy.cors.sh/https://azienda2.staging.re2n.app/api/reporting/gri/reports/report_list",
        {
          method: "GET",
          headers: {
            "x-cors-api-key": "temp_4cc195e07f15a84cb4fe6faaab736d78",
          },
        }
      )
        .then(function (response) {
          return JSON.stringify(response);
        })
        .catch(function (error) {
          console.log(error(error));
        });
    } else {
      return JSON.stringify(response);
    }
  });
  const test = document.querySelector(".test");
  test.innerHTML = result;
}
