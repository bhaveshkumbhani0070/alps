import axios from "axios";
import constant from "../utils/constant.js";
import qs from "querystring";

class Services {
  constructor() {
    if (localStorage.getItem("token") != undefined) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("token");
    }
  }
  async doLogin(val, cb) {
    let data = qs.stringify(val);
    axios
      .post(constant.API_URL + "/users/login", data)
      .then(function(res) {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status == 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
        }
      });
  }
  async doRegister(val, cb) {
    let data = qs.stringify(val);
    let config = {
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    };
    axios
      .post(constant.API_URL + "/users", data, { config })
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status == 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
        }
      });
  }
  // password change
  async changePassword(password, url, cb) {
    // let config = {
    //   headers: {
    //     'content-type': 'application/x-www-form-urlencoded'
    //   }
    // }

    axios
      .post(constant.API_URL + url, qs.stringify(password))
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
        }
      });
  }
  async withdrwalMember(url, cb) {
    // let config = {
    //   headers: {
    //     'content-type': 'application/x-www-form-urlencoded'
    //   }
    // }

    axios
      .post(constant.API_URL + url)
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
        }
      });
  }

  // update phone number
  async updatePhoneNumber(val, url, cb) {
    let data = qs.stringify(val);
    axios
      .post(constant.API_URL + url, data)
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
          if (!error.response) {
            cb(error);
          }
        }
      });
  }
  async checkMobile(val, cb) {
    let data = qs.stringify(val);
    // let config = {
    //   headers: {
    //     'content-type': 'application/x-www-form-urlencoded'
    //   }
    // }
    axios
      .post(constant.API_URL + "/users/pincode/get", data)
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status == 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
        }
      });
  }
  async getTradebookData(url, cb) {
    let config = {
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    };
    axios
      .get(constant.API_URL + url, { config })
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status == 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
        }
      });
  }
  async getCoinData(url, cb) {
    let config = {
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    };
    axios
      .get(constant.API_URL + url, { config })
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status == 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
        }
      });
  }
  async getCoinTrade(url, cb) {
    let config = {
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    };
    axios
      .get(constant.API_URL + url, { config })
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status == 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
        }
      });
  }
  async getCoinCard(url, cb) {
    let config = {
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    };
    axios
      .get(constant.API_URL + url, { config })
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status == 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
        }
      });
  }
  async forgotPassword(val, cb) {
    let data = qs.stringify(val);
    // let config = {
    //   headers: {
    //     'content-type': 'application/x-www-form-urlencoded'
    //   }
    // }
    axios
      .post(constant.API_URL + "/users/forgotpassword", data)
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status == 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
        }
      });
  }
  async resetPassword(val, cb) {
    let data = qs.stringify(val);
    // let config = {
    //   headers: {
    //     'content-type': 'application/x-www-form-urlencoded'
    //   }
    // }
    axios
      .post(constant.API_URL + "/users/resetpassword", data)
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status == 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
        }
      });
  }
  async confirmTwoFA(val, URL, cb) {
    let data = qs.stringify(val);
    let config = {
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    };
    axios
      .post(constant.API_URL + URL, data, { config })
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status == 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
        }
      });
  }
  async getAccountByUser(URL, cb) {
    let config = {
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    };
    axios
      .get(constant.API_URL + URL, { config })
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status == 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
        }
      });
  }
  async getAccountDetail(URL, cb) {
    let authConfig = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    axios
      .get(constant.API_URL + URL, { authConfig })
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status == 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
        }
      });
  }
  async createTrade(val, cb) {
    let data = qs.stringify(val);
    // let authConfig = {
    //   headers: {
    //     'content-type': 'application/x-www-form-urlencoded',
    //     'Authorization': "Bearer " + localStorage.getItem('token')
    //   }
    // }
    axios
      .post(constant.API_URL + "/trades", data)
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status == 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
        }
      });
  }
  async getTradingviewHistory(URL, cb) {
    console.log("url", constant.API_URL + URL);

    axios
      .get(constant.API_URL + URL)
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
        }
      });
  }
  async getTradesByUserWithFilter(URL, cb) {
    let authConfig = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    axios
      .get(constant.API_URL + URL, { authConfig })
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status == 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
        }
      });
  }
  async cancelOrder(val, cb) {
    let data = qs.stringify(val);
    let authConfig = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    axios
      .post(constant.API_URL + "/trades/close", data, { authConfig })
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status == 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
        }
      });
  }
  async withdrawalCoin(val, URL, cb) {
    let data = qs.stringify(val);
    let authConfig = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    axios
      .post(constant.API_URL + URL, data, { authConfig })
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status == 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
        }
      });
  }
  async depositUSDCoin(val, URL, cb) {
    let data = qs.stringify(val);
    let authConfig = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    axios
      .post(constant.API_URL + URL, data, { authConfig })
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status == 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
        }
      });
  }
  async setFavoritTrandingPair(val, URL, cb) {
    let authConfig = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    let data = qs.stringify(val);

    axios
      .post(constant.API_URL + URL, data, { authConfig })
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status == 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
        }
      });
  }
  async getCoinChart(url, cb) {
    let config = {
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    };
    axios
      .get(constant.API_URL + url, { config })
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status == 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
        }
      });
  }
  async updateSecuritySettings(val, url, cb) {
    // let authConfig = {
    //   headers: {
    //     'content-type': 'application/x-www-form-urlencoded',
    //     'Authorization': "Bearer " + localStorage.getItem('token')
    //   }
    // }
    let data = qs.stringify(val);

    axios
      .post(constant.API_URL + url, data)
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
          if (!error.response) {
            cb(error);
          }
        }
      });
  }

  async bankVerifyField(val, url, cb) {
    let data = qs.stringify(val);
    axios
      .put(constant.API_URL + url, data)
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
          if (!error.response) {
            cb(error);
          }
          if (!error.response) {
            cb(error);
          }
        }
      });
  }
  async bankVerification(val, url, cb) {
    axios
      .post(constant.API_URL + url, val)
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
          if (!error.response) {
            cb(error);
          }
          if (!error.response) {
            cb(error);
          }
        }
      });
  }

  async updateSecuritySettings(val, url, cb) {
    // let authConfig = {
    //   headers: {
    //     'content-type': 'application/x-www-form-urlencoded',
    //     'Authorization': "Bearer " + localStorage.getItem('token')
    //   }
    // }
    let data = qs.stringify(val);

    axios
      .post(constant.API_URL + url, data)
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
          if (!error.response) {
            cb(error);
          }
        }
      });
  }

  async savePassport(val, url, cb) {
    axios
      .post(constant.API_URL + url, val)
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          window.x = "e40";
        } 
       else if (error.response && error.response.status === 403 || error.message === "Network Error") {
          var status={
              status:403,
              error:error
          }
          cb(status);
        } 
        else {
          if (error.response) {
            cb(error.response.data);
          }
          if (!error.response) {
            cb(error);
          }
        }
      });
  }
  updateAvatar(val, url, cb) {
    const formData = new FormData();
    formData.append("file", val);
    // let data = qs.stringify(val);
    axios
      .post(constant.API_URL + url, formData)
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
          if (!error.response) {
            cb(error);
          }
        }
      });
  }
  updateEmail(val, url, cb) {
    let authConfig = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    let data = qs.stringify(val);

    axios
      .post(constant.API_URL + url, data, { authConfig })
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
          if (!error.response) {
            cb(error);
          }
        }
      });
  }

  async coininfo(url, cb) {
    axios
      .get(constant.API_URL + "/coin/" + url + "/info")
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
          if (!error.response) {
            cb(error);
          }
        }
      });
  }
  async createAccount(url, val, cb) {
    let data = qs.stringify({ coinName: val });
    let authConfig = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    axios
      .post(constant.API_URL + url, data)
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
          if (!error.response) {
            cb(error);
          }
        }
      });
  }

  async getCountry(cb) {
    axios
      .get("../../public/country.json")
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
          if (!error.response) {
            cb(error);
          }
        }
      });
  }

  async getTransactions(url, cb) {
    let authConfig = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    axios
      .get(constant.API_URL + url)
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
          if (!error.response) {
            cb(error);
          }
        }
      });
  }

  async getLoginHistory(URL, cb) {
    let authConfig = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    axios
      .get(constant.API_URL + URL, { authConfig })
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status == 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
        }
      });
  }
  async logoutFromAllDevice(url, cb) {
    let authConfig = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    axios
      .post(constant.API_URL + url, {})
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
          if (!error.response) {
            cb(error);
          }
        }
      });
  }

  async GetTredAnalysisOverView(url, cb) {
    let authConfig = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    axios
      .get(constant.API_URL + url, {})
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
          if (!error.response) {
            cb(error);
          }
        }
      });
  }

  async GetTredAnalysisDetails(url, cb) {
    let authConfig = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    axios
      .get(constant.API_URL + url, {})
      .then(res => {
        cb(res);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          window.x = "e40";
        } else {
          if (error.response) {
            cb(error.response.data);
          }
          if (!error.response) {
            cb(error);
          }
        }
      });
  }
}
export default Services;
