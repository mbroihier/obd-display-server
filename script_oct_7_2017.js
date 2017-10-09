window.onload = function(){
  var arrayOfObjects;
  var removedObjects = [];
    
  var reviver = function(name, value) {
    if (name === "0") {
      value = new Date(value * 1000);
    }
    return value;
  };
  var collectedData = JSON.parse('{" O2 Sensors Present": [[1507403026, 0], [1507403029, 0], [1507403033, 0], [1507403036, 0], [1507403040, 0], [1507403043, 0], [1507403047, 0], [1507403050, 0], [1507403054, 0], [1507403057, 0], [1507403061, 0], [1507403064, 0], [1507403068, 0], [1507403071, 0], [1507403075, 0], [1507403079, 0], [1507403082, 0], [1507403085, 0], [1507403089, 0], [1507403093, 0], [1507403096, 0], [1507403100, 0], [1507403103, 0], [1507403107, 0], [1507403110, 0], [1507403114, 0], [1507403117, 0], [1507403121, 0], [1507403124, 0], [1507403128, 0], [1507403131, 0], [1507403135, 0], [1507403138, 0], [1507403142, 0], [1507403145, 0], [1507403149, 0], [1507403152, 0], [1507403156, 0], [1507403159, 0], [1507403163, 0], [1507403166, 0], [1507403170, 0], [1507403173, 0], [1507403177, 0], [1507403180, 0], [1507403184, 0], [1507403187, 0], [1507403191, 0], [1507403194, 0], [1507403198, 0], [1507403201, 0], [1507403205, 0], [1507403209, 0], [1507403212, 0], [1507403215, 0], [1507403219, 0], [1507403223, 0], [1507403226, 0], [1507403230, 0], [1507403233, 0], [1507403237, 0], [1507403240, 0], [1507403244, 0]], " Intake Air Temp": [[1507403026, 48], [1507403029, 48], [1507403033, 48], [1507403036, 49], [1507403040, 48], [1507403043, 48], [1507403047, 48], [1507403050, 48], [1507403054, 47], [1507403057, 47], [1507403061, 47], [1507403064, 47], [1507403068, 47], [1507403071, 48], [1507403075, 48], [1507403079, 49], [1507403082, 49], [1507403085, 48], [1507403089, 47], [1507403093, 47], [1507403096, 48], [1507403100, 48], [1507403103, 49], [1507403107, 50], [1507403110, 51], [1507403114, 51], [1507403117, 50], [1507403121, 50], [1507403124, 49], [1507403128, 48], [1507403131, 49], [1507403135, 49], [1507403138, 48], [1507403142, 49], [1507403145, 49], [1507403149, 51], [1507403152, 51], [1507403156, 51], [1507403159, 52], [1507403163, 52], [1507403166, 52], [1507403170, 51], [1507403173, 53], [1507403177, 54], [1507403180, 54], [1507403184, 54], [1507403187, 54], [1507403191, 54], [1507403194, 54], [1507403198, 55], [1507403201, 55], [1507403205, 55], [1507403209, 55], [1507403212, 55], [1507403215, 56], [1507403219, 55], [1507403223, 56], [1507403226, 56], [1507403230, 56], [1507403233, 57], [1507403237, 57], [1507403240, 57], [1507403244, 57]], " Engine RPM": [[1507403026, 760.5], [1507403029, 765.5], [1507403033, 768.75], [1507403036, 762.25], [1507403040, 1957.5], [1507403043, 2087.75], [1507403047, 1717.0], [1507403050, 2137.75], [1507403054, 1570.5], [1507403057, 1707.75], [1507403061, 1721.5], [1507403064, 1713.75], [1507403068, 1714.25], [1507403071, 1634.75], [1507403075, 1613.5], [1507403079, 1545.5], [1507403082, 1572.75], [1507403085, 1620.0], [1507403089, 1702.25], [1507403093, 1730.75], [1507403096, 1743.75], [1507403100, 1716.0], [1507403103, 1678.75], [1507403107, 1552.5], [1507403110, 1505.25], [1507403114, 1404.75], [1507403117, 965.5], [1507403121, 2041.0], [1507403124, 1365.75], [1507403128, 1484.0], [1507403131, 1515.25], [1507403135, 1430.25], [1507403138, 1582.25], [1507403142, 1545.25], [1507403145, 1474.25], [1507403149, 1378.25], [1507403152, 1359.5], [1507403156, 1266.0], [1507403159, 1223.0], [1507403163, 895.0], [1507403166, 1359.0], [1507403170, 1525.5], [1507403173, 1484.75], [1507403177, 1271.5], [1507403180, 890.25], [1507403184, 846.5], [1507403187, 983.0], [1507403191, 1247.25], [1507403194, 905.5], [1507403198, 786.75], [1507403201, 775.5], [1507403205, 1257.25], [1507403209, 1090.0], [1507403212, 1195.25], [1507403215, 1046.5], [1507403219, 1094.25], [1507403223, 1428.5], [1507403226, 1220.5], [1507403230, 1272.5], [1507403233, 959.5], [1507403237, 1053.25], [1507403240, 933.0], [1507403244, 933.75]], " Status since DTCs cleared": [[1507403026, 0], [1507403029, 0], [1507403033, 0], [1507403036, 0], [1507403040, 0], [1507403043, 0], [1507403047, 0], [1507403050, 0], [1507403054, 0], [1507403057, 0], [1507403061, 0], [1507403064, 0], [1507403068, 0], [1507403071, 0], [1507403075, 0], [1507403079, 0], [1507403082, 0], [1507403085, 0], [1507403089, 0], [1507403093, 0], [1507403096, 0], [1507403100, 0], [1507403103, 0], [1507403107, 0], [1507403110, 0], [1507403114, 0], [1507403117, 0], [1507403121, 0], [1507403124, 0], [1507403128, 0], [1507403131, 0], [1507403135, 0], [1507403138, 0], [1507403142, 0], [1507403145, 0], [1507403149, 0], [1507403152, 0], [1507403156, 0], [1507403159, 0], [1507403163, 0], [1507403166, 0], [1507403170, 0], [1507403173, 0], [1507403177, 0], [1507403180, 0], [1507403184, 0], [1507403187, 0], [1507403191, 0], [1507403194, 0], [1507403198, 0], [1507403201, 0], [1507403205, 0], [1507403209, 0], [1507403212, 0], [1507403215, 0], [1507403219, 0], [1507403223, 0], [1507403226, 0], [1507403230, 0], [1507403233, 0], [1507403237, 0], [1507403240, 0], [1507403244, 0]], " O2: Bank 1 - Sensor 2 Voltage": [[1507403026, 0.78], [1507403029, 0.78], [1507403033, 0.78], [1507403036, 0.78], [1507403040, 0.84], [1507403043, 0.86], [1507403047, 0.08], [1507403050, 0.8], [1507403054, 0.22], [1507403057, 0.66], [1507403061, 0.66], [1507403064, 0.7], [1507403068, 0.8], [1507403071, 0.14], [1507403075, 0.22], [1507403079, 0.46], [1507403082, 0.76], [1507403085, 0.8], [1507403089, 0.78], [1507403093, 0.76], [1507403096, 0.76], [1507403100, 0.74], [1507403103, 0.74], [1507403107, 0.0], [1507403110, 0.1], [1507403114, 0.1], [1507403117, 0.02], [1507403121, 0.18], [1507403124, 0.12], [1507403128, 0.24], [1507403131, 0.46], [1507403135, 0.12], [1507403138, 0.36], [1507403142, 0.56], [1507403145, 0.16], [1507403149, 0.14], [1507403152, 0.32], [1507403156, 0.0], [1507403159, 0.12], [1507403163, 0.14], [1507403166, 0.14], [1507403170, 0.28], [1507403173, 0.02], [1507403177, 0.0], [1507403180, 0.08], [1507403184, 0.12], [1507403187, 0.14], [1507403191, 0.14], [1507403194, 0.18], [1507403198, 0.16], [1507403201, 0.36], [1507403205, 0.56], [1507403209, 0.86], [1507403212, 0.84], [1507403215, 0.82], [1507403219, 0.84], [1507403223, 0.8], [1507403226, 0.84], [1507403230, 0.8], [1507403233, 0.8], [1507403237, 0.78], [1507403240, 0.84], [1507403244, 0.84]], " Get DTCs from the current/last driving cycle": [[1507403026, 0], [1507403029, 0], [1507403033, 0], [1507403036, 0], [1507403040, 0], [1507403043, 0], [1507403047, 0], [1507403050, 0], [1507403054, 0], [1507403057, 0], [1507403061, 0], [1507403064, 0], [1507403068, 0], [1507403071, 0], [1507403075, 0], [1507403079, 0], [1507403082, 0], [1507403085, 0], [1507403089, 0], [1507403093, 0], [1507403096, 0], [1507403100, 0], [1507403103, 0], [1507403107, 0], [1507403110, 0], [1507403114, 0], [1507403117, 0], [1507403121, 0], [1507403124, 0], [1507403128, 0], [1507403131, 0], [1507403135, 0], [1507403138, 0], [1507403142, 0], [1507403145, 0], [1507403149, 0], [1507403152, 0], [1507403156, 0], [1507403159, 0], [1507403163, 0], [1507403166, 0], [1507403170, 0], [1507403173, 0], [1507403177, 0], [1507403180, 0], [1507403184, 0], [1507403187, 0], [1507403191, 0], [1507403194, 0], [1507403198, 0], [1507403201, 0], [1507403205, 0], [1507403209, 0], [1507403212, 0], [1507403215, 0], [1507403219, 0], [1507403223, 0], [1507403226, 0], [1507403230, 0], [1507403233, 0], [1507403237, 0], [1507403240, 0], [1507403244, 0]], " Get DTCs": [[1507403026, 0], [1507403029, 0], [1507403033, 0], [1507403036, 0], [1507403040, 0], [1507403043, 0], [1507403047, 0], [1507403050, 0], [1507403054, 0], [1507403057, 0], [1507403061, 0], [1507403064, 0], [1507403068, 0], [1507403071, 0], [1507403075, 0], [1507403079, 0], [1507403082, 0], [1507403085, 0], [1507403089, 0], [1507403093, 0], [1507403096, 0], [1507403100, 0], [1507403103, 0], [1507403107, 0], [1507403110, 0], [1507403114, 0], [1507403117, 0], [1507403121, 0], [1507403124, 0], [1507403128, 0], [1507403131, 0], [1507403135, 0], [1507403138, 0], [1507403142, 0], [1507403145, 0], [1507403149, 0], [1507403152, 0], [1507403156, 0], [1507403159, 0], [1507403163, 0], [1507403166, 0], [1507403170, 0], [1507403173, 0], [1507403177, 0], [1507403180, 0], [1507403184, 0], [1507403187, 0], [1507403191, 0], [1507403194, 0], [1507403198, 0], [1507403201, 0], [1507403205, 0], [1507403209, 0], [1507403212, 0], [1507403215, 0], [1507403219, 0], [1507403223, 0], [1507403226, 0], [1507403230, 0], [1507403233, 0], [1507403237, 0], [1507403240, 0], [1507403244, 0]], " Engine Coolant Temperature": [[1507403026, 88], [1507403029, 89], [1507403033, 89], [1507403036, 89], [1507403040, 90], [1507403043, 90], [1507403047, 91], [1507403050, 91], [1507403054, 91], [1507403057, 92], [1507403061, 92], [1507403064, 92], [1507403068, 93], [1507403071, 93], [1507403075, 93], [1507403079, 92], [1507403082, 92], [1507403085, 92], [1507403089, 92], [1507403093, 92], [1507403096, 92], [1507403100, 92], [1507403103, 91], [1507403107, 91], [1507403110, 91], [1507403114, 91], [1507403117, 91], [1507403121, 91], [1507403124, 91], [1507403128, 91], [1507403131, 90], [1507403135, 90], [1507403138, 90], [1507403142, 91], [1507403145, 91], [1507403149, 91], [1507403152, 91], [1507403156, 91], [1507403159, 91], [1507403163, 91], [1507403166, 91], [1507403170, 91], [1507403173, 92], [1507403177, 91], [1507403180, 92], [1507403184, 92], [1507403187, 92], [1507403191, 92], [1507403194, 92], [1507403198, 92], [1507403201, 92], [1507403205, 92], [1507403209, 92], [1507403212, 93], [1507403215, 92], [1507403219, 92], [1507403223, 92], [1507403226, 92], [1507403230, 92], [1507403233, 92], [1507403237, 92], [1507403240, 92], [1507403244, 92]], " Vehicle Speed": [[1507403026, 0], [1507403029, 0], [1507403033, 0], [1507403036, 0], [1507403040, 14], [1507403043, 35], [1507403047, 48], [1507403050, 61], [1507403054, 66], [1507403057, 72], [1507403061, 74], [1507403064, 74], [1507403068, 74], [1507403071, 71], [1507403075, 70], [1507403079, 68], [1507403082, 68], [1507403085, 69], [1507403089, 72], [1507403093, 74], [1507403096, 75], [1507403100, 74], [1507403103, 72], [1507403107, 68], [1507403110, 66], [1507403114, 61], [1507403117, 57], [1507403121, 60], [1507403124, 60], [1507403128, 62], [1507403131, 66], [1507403135, 61], [1507403138, 66], [1507403142, 69], [1507403145, 64], [1507403149, 60], [1507403152, 58], [1507403156, 55], [1507403159, 54], [1507403163, 43], [1507403166, 40], [1507403170, 44], [1507403173, 45], [1507403177, 39], [1507403180, 34], [1507403184, 18], [1507403187, 17], [1507403191, 23], [1507403194, 14], [1507403198, 0], [1507403201, 7], [1507403205, 14], [1507403209, 14], [1507403212, 13], [1507403215, 11], [1507403219, 10], [1507403223, 16], [1507403226, 13], [1507403230, 14], [1507403233, 11], [1507403237, 10], [1507403240, 10], [1507403244, 10]], " Throttle Position": [[1507403026, 16.470588235294116], [1507403029, 16.470588235294116], [1507403033, 16.470588235294116], [1507403036, 16.470588235294116], [1507403040, 31.372549019607842], [1507403043, 31.764705882352942], [1507403047, 16.470588235294116], [1507403050, 37.64705882352941], [1507403054, 29.41176470588235], [1507403057, 30.980392156862745], [1507403061, 25.49019607843137], [1507403064, 25.098039215686274], [1507403068, 25.49019607843137], [1507403071, 23.529411764705884], [1507403075, 16.470588235294116], [1507403079, 16.862745098039216], [1507403082, 20.784313725490197], [1507403085, 27.058823529411764], [1507403089, 29.80392156862745], [1507403093, 27.45098039215686], [1507403096, 24.705882352941178], [1507403100, 21.96078431372549], [1507403103, 19.607843137254903], [1507403107, 16.470588235294116], [1507403110, 16.470588235294116], [1507403114, 16.470588235294116], [1507403117, 16.470588235294116], [1507403121, 29.41176470588235], [1507403124, 18.823529411764707], [1507403128, 26.666666666666668], [1507403131, 23.529411764705884], [1507403135, 25.88235294117647], [1507403138, 33.333333333333336], [1507403142, 21.568627450980394], [1507403145, 29.41176470588235], [1507403149, 16.470588235294116], [1507403152, 22.745098039215687], [1507403156, 16.470588235294116], [1507403159, 16.470588235294116], [1507403163, 16.470588235294116], [1507403166, 16.470588235294116], [1507403170, 24.705882352941178], [1507403173, 16.470588235294116], [1507403177, 16.470588235294116], [1507403180, 16.470588235294116], [1507403184, 16.470588235294116], [1507403187, 17.647058823529413], [1507403191, 21.176470588235293], [1507403194, 16.470588235294116], [1507403198, 16.470588235294116], [1507403201, 16.470588235294116], [1507403205, 16.470588235294116], [1507403209, 16.470588235294116], [1507403212, 19.607843137254903], [1507403215, 18.03921568627451], [1507403219, 18.823529411764707], [1507403223, 19.607843137254903], [1507403226, 18.431372549019606], [1507403230, 17.254901960784313], [1507403233, 16.470588235294116], [1507403237, 17.254901960784313], [1507403240, 16.470588235294116], [1507403244, 16.470588235294116]], " Short Term Fuel Trim - Bank 1": [[1507403026, -1.5625], [1507403029, -2.34375], [1507403033, -2.34375], [1507403036, -2.34375], [1507403040, 1.5625], [1507403043, -0.78125], [1507403047, 0.0], [1507403050, -3.125], [1507403054, -2.34375], [1507403057, -3.125], [1507403061, -3.125], [1507403064, 0.78125], [1507403068, -3.125], [1507403071, -0.78125], [1507403075, 0.0], [1507403079, -5.46875], [1507403082, -3.90625], [1507403085, -1.5625], [1507403089, -4.6875], [1507403093, -3.90625], [1507403096, -3.90625], [1507403100, -3.125], [1507403103, -3.125], [1507403107, 0.0], [1507403110, 5.46875], [1507403114, 0.0], [1507403117, 0.0], [1507403121, 0.0], [1507403124, 0.0], [1507403128, -0.78125], [1507403131, -5.46875], [1507403135, 0.78125], [1507403138, 3.125], [1507403142, 0.0], [1507403145, 0.78125], [1507403149, 0.0], [1507403152, -3.90625], [1507403156, 0.0], [1507403159, 3.125], [1507403163, -1.5625], [1507403166, -1.5625], [1507403170, -1.5625], [1507403173, 0.0], [1507403177, 0.0], [1507403180, -0.78125], [1507403184, 0.0], [1507403187, -0.78125], [1507403191, 0.78125], [1507403194, -1.5625], [1507403198, -1.5625], [1507403201, -2.34375], [1507403205, 1.5625], [1507403209, 1.5625], [1507403212, -0.78125], [1507403215, -4.6875], [1507403219, -6.25], [1507403223, -3.90625], [1507403226, -3.125], [1507403230, -4.6875], [1507403233, 3.90625], [1507403237, -1.5625], [1507403240, 0.0], [1507403244, -0.78125]], " Timing Advance": [[1507403026, 18.0], [1507403029, 17.5], [1507403033, 15.5], [1507403036, 25.5], [1507403040, 35.5], [1507403043, 29.5], [1507403047, 19.0], [1507403050, 27.0], [1507403054, 23.0], [1507403057, 36.5], [1507403061, 37.0], [1507403064, 31.5], [1507403068, 31.5], [1507403071, 35.5], [1507403075, 32.0], [1507403079, 30.5], [1507403082, 33.5], [1507403085, 25.5], [1507403089, 33.0], [1507403093, 35.0], [1507403096, 39.5], [1507403100, 39.0], [1507403103, 26.5], [1507403107, 30.0], [1507403110, 17.0], [1507403114, 17.0], [1507403117, 27.0], [1507403121, 21.0], [1507403124, 21.5], [1507403128, 30.5], [1507403131, 22.5], [1507403135, 25.5], [1507403138, 33.5], [1507403142, 26.0], [1507403145, 29.5], [1507403149, 19.0], [1507403152, 20.0], [1507403156, 21.5], [1507403159, 17.0], [1507403163, 17.0], [1507403166, 30.5], [1507403170, 34.0], [1507403173, 17.0], [1507403177, 17.0], [1507403180, 17.0], [1507403184, 20.0], [1507403187, 29.0], [1507403191, 17.0], [1507403194, 17.0], [1507403198, 17.0], [1507403201, 25.0], [1507403205, 35.0], [1507403209, 21.0], [1507403212, 27.0], [1507403215, 25.5], [1507403219, 35.5], [1507403223, 34.0], [1507403226, 35.5], [1507403230, 24.0], [1507403233, 17.0], [1507403237, 22.0], [1507403240, 23.0], [1507403244, 23.0]], " Calculated Engine Load": [[1507403026, 5.490196078431373], [1507403029, 5.490196078431373], [1507403033, 5.490196078431373], [1507403036, 5.490196078431373], [1507403040, 20.392156862745097], [1507403043, 26.274509803921568], [1507403047, 12.941176470588236], [1507403050, 32.549019607843135], [1507403054, 20.0], [1507403057, 23.137254901960784], [1507403061, 15.294117647058824], [1507403064, 16.470588235294116], [1507403068, 16.470588235294116], [1507403071, 13.72549019607843], [1507403075, 6.666666666666667], [1507403079, 5.882352941176471], [1507403082, 10.980392156862745], [1507403085, 18.03921568627451], [1507403089, 21.96078431372549], [1507403093, 18.03921568627451], [1507403096, 14.901960784313726], [1507403100, 11.372549019607844], [1507403103, 10.588235294117647], [1507403107, 6.2745098039215685], [1507403110, 7.450980392156863], [1507403114, 6.2745098039215685], [1507403117, 6.2745098039215685], [1507403121, 21.96078431372549], [1507403124, 9.803921568627452], [1507403128, 18.03921568627451], [1507403131, 12.156862745098039], [1507403135, 15.294117647058824], [1507403138, 23.92156862745098], [1507403142, 11.764705882352942], [1507403145, 12.549019607843137], [1507403149, 6.666666666666667], [1507403152, 12.156862745098039], [1507403156, 6.666666666666667], [1507403159, 6.2745098039215685], [1507403163, 6.2745098039215685], [1507403166, 7.450980392156863], [1507403170, 14.901960784313726], [1507403173, 6.2745098039215685], [1507403177, 5.882352941176471], [1507403180, 5.882352941176471], [1507403184, 5.882352941176471], [1507403187, 7.8431372549019605], [1507403191, 7.450980392156863], [1507403194, 6.2745098039215685], [1507403198, 5.882352941176471], [1507403201, 6.2745098039215685], [1507403205, 7.450980392156863], [1507403209, 5.490196078431373], [1507403212, 9.803921568627452], [1507403215, 8.235294117647058], [1507403219, 7.8431372549019605], [1507403223, 10.196078431372548], [1507403226, 7.8431372549019605], [1507403230, 8.627450980392156], [1507403233, 5.882352941176471], [1507403237, 7.8431372549019605], [1507403240, 5.098039215686274], [1507403244, 5.882352941176471]]}', reviver);

  let options = { //set plot options
    series: { 
      points: {show: true},
      lines: {show: true}
    },
    xaxis: {
      show: true,
      mode: "time",
      timeformat: "%m/%d/%y %H:%M"
    },
    yaxes: [{position: "left"}],
    legend: {
      show: true,
      container: $("#legend")
    },
    grid: {
      clickable: true,
      hoverable: true
    }
  }; 
  arrayOfObjects = [];

  for (let series in collectedData) {
    arrayOfObjects.push({data:collectedData[series], label: series, yaxis: 1});
  }
  // plot measurements
  $.plot($("#placeholder"),arrayOfObjects,options);
  $("#placeholder").bind("plotclick", function(event, pos, item) {
    if (item == null) return;
    removedObjects.push(arrayOfObjects.splice(item.seriesIndex,1)[0]);
    $.plot($("#placeholder"),arrayOfObjects,options);
    let insertionPoint = document.querySelector("#removedLines");
    let box = document.createElement("input");
    box.setAttribute("type", "checkbox");
    box.setAttribute("value", item.series.label);
    box.setAttribute("name", item.series.label);
    //box.setAttribute("checked","");
    box.innerHTML = item.series.label;
    box.onclick = function(event) {
      for (let seriesIndex = 0; seriesIndex < removedObjects.length; seriesIndex++) {
        if (this.getAttribute("name") === removedObjects[seriesIndex].label) {
          arrayOfObjects.push(removedObjects[seriesIndex]);
          removedObjects.splice(seriesIndex,1);
          $.plot($("#placeholder"),arrayOfObjects,options);
          this.nextSibling.remove(); // remove label
          this.remove(); // remove checkbox
          if (removedObjects.length == 0) {
            insertionPoint.removeAttribute("style");
          }
          break;
        } 
      }
    };

    let label = document.createElement("label");
    label.innerHTML = item.series.label;
    insertionPoint.appendChild(box);
    insertionPoint.appendChild(label);
    insertionPoint.setAttribute("style", "display:block;");
    });
  // Create list of series
  let insertionPoint = document.querySelector("#ownAxis");
  let checkedBoxes = 0;
  for (let seriesIndex = 0; seriesIndex < arrayOfObjects.length; seriesIndex++) {
    let series = arrayOfObjects[seriesIndex];
    let box = document.createElement("input");
    box.setAttribute("type", "checkbox");
    box.setAttribute("value", series.label);
    box.setAttribute("name", series.label);
    box.innerHTML = series.label;
    box.onclick = function(event) {
      let found = false;
      for (let seriesIndex = 0; seriesIndex < arrayOfObjects.length; seriesIndex++) {
        if (this.getAttribute("name") === arrayOfObjects[seriesIndex].label) {
          if (arrayOfObjects[seriesIndex].yaxis === 1) {
            checkedBoxes++;
            if (options.yaxes.length < checkedBoxes + 1) {
              options.yaxes.push({position: "right"});
            }
            arrayOfObjects[seriesIndex].yaxis = checkedBoxes + 1;
          } else {
            arrayOfObjects[seriesIndex].yaxis = 1;
            checkedBoxes--;
          }
          $.plot($("#placeholder"),arrayOfObjects,options);
          found = true;
          break;
        } 
      }
      if (!found) {
        for (let seriesIndex = 0; seriesIndex < removedObjects.length; seriesIndex++) {
          if (this.getAttribute("name") === removedObjects[seriesIndex].label) {
            if (removedObjects[seriesIndex].yaxis === 1) {
              checkedBoxes++;
              if (options.yaxes.length < checkedBoxes + 1) {
                options.yaxes.push({position: "right"});
              }
              removedObjects[seriesIndex].yaxis = checkedBoxes + 1;
            } else {
              removedObjects[seriesIndex].yaxis = 1;
              checkedBoxes--;
            }
            found = true;
            break;
          } 
        }
      }
      console.log("processing " + this.getAttribute("name") + ", checkedBoxes: " + checkedBoxes);
      if (!found) {
        console.log("logic error - element reference not found");
      }
    };
    let label = document.createElement("label");
    label.innerHTML = series.label;
    insertionPoint.appendChild(box);
    insertionPoint.appendChild(label);
  }
};

