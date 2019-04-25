const ZIPS = [
  {
    zip: 1050,
    city: "København K",
    long: 12.586,
    lat: 55.6807
  },
  {
    zip: 1051,
    city: "København K",
    long: 12.5902,
    lat: 55.6798
  },
  {
    zip: 1052,
    city: "København K",
    long: 12.5895,
    lat: 55.6791
  },
  {
    zip: 1053,
    city: "København K",
    long: 12.5907,
    lat: 55.678
  },
  {
    zip: 1054,
    city: "København K",
    long: 12.5891,
    lat: 55.6776
  },
  {
    zip: 1055,
    city: "København K",
    long: 12.5881,
    lat: 55.6772
  },
  {
    zip: 1056,
    city: "København K",
    long: 12.5879,
    lat: 55.6795
  },
  {
    zip: 1057,
    city: "København K",
    long: 12.5896,
    lat: 55.6783
  },
  {
    zip: 1058,
    city: "København K",
    long: 12.5879,
    lat: 55.676
  },
  {
    zip: 1059,
    city: "København K",
    long: 12.5867,
    lat: 55.6768
  },
  {
    zip: 1060,
    city: "København K",
    long: 12.5838,
    lat: 55.6765
  },
  {
    zip: 1061,
    city: "København K",
    long: 12.5811,
    lat: 55.6775
  },
  {
    zip: 1062,
    city: "København K",
    long: 12.5821,
    lat: 55.6775
  },
  {
    zip: 1063,
    city: "København K",
    long: 12.5848,
    lat: 55.6781
  },
  {
    zip: 1064,
    city: "København K",
    long: 12.5842,
    lat: 55.6786
  },
  {
    zip: 1065,
    city: "København K",
    long: 12.5812,
    lat: 55.6779
  },
  {
    zip: 1066,
    city: "København K",
    long: 12.5828,
    lat: 55.6774
  },
  {
    zip: 1067,
    city: "København K",
    long: 12.5818,
    lat: 55.6787
  },
  {
    zip: 1068,
    city: "København K",
    long: 12.5836,
    lat: 55.6775
  },
  {
    zip: 1069,
    city: "København K",
    long: 12.5842,
    lat: 55.6778
  },
  {
    zip: 1070,
    city: "København K",
    long: 12.5835,
    lat: 55.6788
  },
  {
    zip: 1071,
    city: "København K",
    long: 12.5838,
    lat: 55.6783
  },
  {
    zip: 1072,
    city: "København K",
    long: 12.5807,
    lat: 55.6785
  },
  {
    zip: 1073,
    city: "København K",
    long: 12.5806,
    lat: 55.6788
  },
  {
    zip: 1074,
    city: "København K",
    long: 12.5836,
    lat: 55.6794
  },
  {
    zip: 1100,
    city: "København K",
    long: 12.5828,
    lat: 55.6799
  },
  {
    zip: 1101,
    city: "København K",
    long: 12.5832,
    lat: 55.6804
  },
  {
    zip: 1102,
    city: "København K",
    long: 12.5828,
    lat: 55.6808
  },
  {
    zip: 1103,
    city: "København K",
    long: 12.5841,
    lat: 55.6808
  },
  {
    zip: 1104,
    city: "København K",
    long: 12.5839,
    lat: 55.6812
  },
  {
    zip: 1105,
    city: "København K",
    long: 12.5821,
    lat: 55.68
  },
  {
    zip: 1106,
    city: "København K",
    long: 12.5812,
    lat: 55.6805
  },
  {
    zip: 1107,
    city: "København K",
    long: 12.5832,
    lat: 55.6816
  },
  {
    zip: 1110,
    city: "København K",
    long: 12.5818,
    lat: 55.6815
  },
  {
    zip: 1111,
    city: "København K",
    long: 12.5808,
    lat: 55.6822
  },
  {
    zip: 1112,
    city: "København K",
    long: 12.5797,
    lat: 55.6812
  },
  {
    zip: 1113,
    city: "København K",
    long: 12.5802,
    lat: 55.68
  },
  {
    zip: 1114,
    city: "København K",
    long: 12.5789,
    lat: 55.6807
  },
  {
    zip: 1115,
    city: "København K",
    long: 12.5783,
    lat: 55.681
  },
  {
    zip: 1116,
    city: "København K",
    long: 12.5801,
    lat: 55.6822
  },
  {
    zip: 1117,
    city: "København K",
    long: 12.5816,
    lat: 55.681
  },
  {
    zip: 1118,
    city: "København K",
    long: 12.5808,
    lat: 55.681
  },
  {
    zip: 1119,
    city: "København K",
    long: 12.5771,
    lat: 55.6824
  },
  {
    zip: 1120,
    city: "København K",
    long: 12.5787,
    lat: 55.6824
  },
  {
    zip: 1121,
    city: "København K",
    long: 12.5789,
    lat: 55.6828
  },
  {
    zip: 1122,
    city: "København K",
    long: 12.5798,
    lat: 55.6825
  },
  {
    zip: 1123,
    city: "København K",
    long: 12.5775,
    lat: 55.6843
  },
  {
    zip: 1124,
    city: "København K",
    long: 12.5769,
    lat: 55.683
  },
  {
    zip: 1125,
    city: "København K",
    long: 12.5763,
    lat: 55.6824
  },
  {
    zip: 1126,
    city: "København K",
    long: 12.5753,
    lat: 55.6821
  },
  {
    zip: 1127,
    city: "København K",
    long: 12.5756,
    lat: 55.6829
  },
  {
    zip: 1128,
    city: "København K",
    long: 12.5747,
    lat: 55.6828
  },
  {
    zip: 1129,
    city: "København K",
    long: 12.5743,
    lat: 55.6832
  },
  {
    zip: 1130,
    city: "København K",
    long: 12.5736,
    lat: 55.6834
  },
  {
    zip: 1131,
    city: "København K",
    long: 12.5738,
    lat: 55.6839
  },
  {
    zip: 1150,
    city: "København K",
    long: 12.5771,
    lat: 55.6812
  },
  {
    zip: 1151,
    city: "København K",
    long: 12.5764,
    lat: 55.6793
  },
  {
    zip: 1152,
    city: "København K",
    long: 12.5771,
    lat: 55.6804
  },
  {
    zip: 1153,
    city: "København K",
    long: 12.5774,
    lat: 55.6791
  },
  {
    zip: 1154,
    city: "København K",
    long: 12.5758,
    lat: 55.6796
  },
  {
    zip: 1155,
    city: "København K",
    long: 12.5754,
    lat: 55.6801
  },
  {
    zip: 1156,
    city: "København K",
    long: 12.5753,
    lat: 55.6796
  },
  {
    zip: 1157,
    city: "København K",
    long: 12.5754,
    lat: 55.6791
  },
  {
    zip: 1158,
    city: "København K",
    long: 12.5736,
    lat: 55.6786
  },
  {
    zip: 1159,
    city: "København K",
    long: 12.5761,
    lat: 55.6808
  },
  {
    zip: 1160,
    city: "København K",
    long: 12.5787,
    lat: 55.6789
  },
  {
    zip: 1161,
    city: "København K",
    long: 12.5756,
    lat: 55.6785
  },
  {
    zip: 1162,
    city: "København K",
    long: 12.5742,
    lat: 55.6789
  },
  {
    zip: 1164,
    city: "København K",
    long: 12.5734,
    lat: 55.6783
  },
  {
    zip: 1165,
    city: "København K",
    long: 12.5707,
    lat: 55.6808
  },
  {
    zip: 1166,
    city: "København K",
    long: 12.5728,
    lat: 55.679
  },
  {
    zip: 1167,
    city: "København K",
    long: 12.5716,
    lat: 55.6791
  },
  {
    zip: 1168,
    city: "København K",
    long: 12.5724,
    lat: 55.6799
  },
  {
    zip: 1169,
    city: "København K",
    long: 12.5745,
    lat: 55.6806
  },
  {
    zip: 1170,
    city: "København K",
    long: 12.5745,
    lat: 55.6801
  },
  {
    zip: 1171,
    city: "København K",
    long: 12.5723,
    lat: 55.6818
  },
  {
    zip: 1172,
    city: "København K",
    long: 12.5736,
    lat: 55.681
  },
  {
    zip: 1173,
    city: "København K",
    long: 12.5737,
    lat: 55.6817
  },
  {
    zip: 1174,
    city: "København K",
    long: 12.5725,
    lat: 55.6824
  },
  {
    zip: 1175,
    city: "København K",
    long: 12.5738,
    lat: 55.6825
  },
  {
    zip: 1200,
    city: "København K",
    long: 12.5798,
    lat: 55.6782
  },
  {
    zip: 1201,
    city: "København K",
    long: 12.5779,
    lat: 55.6781
  },
  {
    zip: 1202,
    city: "København K",
    long: 12.5789,
    lat: 55.6778
  },
  {
    zip: 1203,
    city: "København K",
    long: 12.5768,
    lat: 55.6765
  },
  {
    zip: 1204,
    city: "København K",
    long: 12.5755,
    lat: 55.6765
  },
  {
    zip: 1205,
    city: "København K",
    long: 12.5768,
    lat: 55.6772
  },
  {
    zip: 1206,
    city: "København K",
    long: 12.5771,
    lat: 55.6775
  },
  {
    zip: 1207,
    city: "København K",
    long: 12.5766,
    lat: 55.6781
  },
  {
    zip: 1208,
    city: "København K",
    long: 12.575,
    lat: 55.677
  },
  {
    zip: 1209,
    city: "København K",
    long: 12.5757,
    lat: 55.6779
  },
  {
    zip: 1210,
    city: "København K",
    long: 12.5743,
    lat: 55.6781
  },
  {
    zip: 1211,
    city: "København K",
    long: 12.5742,
    lat: 55.6775
  },
  {
    zip: 1212,
    city: "København K",
    long: 12.5787,
    lat: 55.677
  },
  {
    zip: 1213,
    city: "København K",
    long: 12.5778,
    lat: 55.6767
  },
  {
    zip: 1214,
    city: "København K",
    long: 12.5798,
    lat: 55.6746
  },
  {
    zip: 1215,
    city: "København K",
    long: 12.5858,
    lat: 55.6754
  },
  {
    zip: 1216,
    city: "København K",
    long: 12.583,
    lat: 55.6752
  },
  {
    zip: 1218,
    city: "København K",
    long: 12.5804,
    lat: 55.6761
  },
  {
    zip: 1219,
    city: "København K",
    long: 12.5834,
    lat: 55.6737
  },
  {
    zip: 1220,
    city: "København K",
    long: 12.5786,
    lat: 55.6736
  },
  {
    zip: 1221,
    city: "København K",
    long: 12.5819,
    lat: 55.6728
  },
  {
    zip: 1250,
    city: "København K",
    long: 12.5898,
    lat: 55.682
  },
  {
    zip: 1251,
    city: "København K",
    long: 12.595,
    lat: 55.6796
  },
  {
    zip: 1252,
    city: "København K",
    long: 12.5962,
    lat: 55.6815
  },
  {
    zip: 1253,
    city: "København K",
    long: 12.597,
    lat: 55.6848
  },
  {
    zip: 1254,
    city: "København K",
    long: 12.5903,
    lat: 55.681
  },
  {
    zip: 1255,
    city: "København K",
    long: 12.5886,
    lat: 55.6812
  },
  {
    zip: 1256,
    city: "København K",
    long: 12.5964,
    lat: 55.6869
  },
  {
    zip: 1257,
    city: "København K",
    long: 12.5928,
    lat: 55.6845
  },
  {
    zip: 1259,
    city: "København K",
    long: 12.6154,
    lat: 55.7049
  },
  {
    zip: 1260,
    city: "København K",
    long: 12.5901,
    lat: 55.6838
  },
  {
    zip: 1261,
    city: "København K",
    long: 12.5869,
    lat: 55.6819
  },
  {
    zip: 1263,
    city: "København K",
    long: 12.5949,
    lat: 55.6883
  },
  {
    zip: 1264,
    city: "København K",
    long: 12.5876,
    lat: 55.6842
  },
  {
    zip: 1265,
    city: "København K",
    long: 12.5894,
    lat: 55.6849
  },
  {
    zip: 1266,
    city: "København K",
    long: 12.591,
    lat: 55.6879
  },
  {
    zip: 1267,
    city: "København K",
    long: 12.5904,
    lat: 55.6883
  },
  {
    zip: 1268,
    city: "København K",
    long: 12.5903,
    lat: 55.6888
  },
  {
    zip: 1270,
    city: "København K",
    long: 12.5909,
    lat: 55.6898
  },
  {
    zip: 1271,
    city: "København K",
    long: 12.5898,
    lat: 55.6892
  },
  {
    zip: 1300,
    city: "København K",
    long: 12.5843,
    lat: 55.6827
  },
  {
    zip: 1301,
    city: "København K",
    long: 12.5859,
    lat: 55.6833
  },
  {
    zip: 1302,
    city: "København K",
    long: 12.5841,
    lat: 55.6845
  },
  {
    zip: 1303,
    city: "København K",
    long: 12.5884,
    lat: 55.6859
  },
  {
    zip: 1304,
    city: "København K",
    long: 12.5831,
    lat: 55.6833
  },
  {
    zip: 1306,
    city: "København K",
    long: 12.5814,
    lat: 55.6843
  },
  {
    zip: 1307,
    city: "København K",
    long: 12.58,
    lat: 55.6864
  },
  {
    zip: 1308,
    city: "København K",
    long: 12.5848,
    lat: 55.6865
  },
  {
    zip: 1309,
    city: "København K",
    long: 12.5834,
    lat: 55.6872
  },
  {
    zip: 1310,
    city: "København K",
    long: 12.5903,
    lat: 55.6859
  },
  {
    zip: 1311,
    city: "København K",
    long: 12.5838,
    lat: 55.6881
  },
  {
    zip: 1312,
    city: "København K",
    long: 12.5858,
    lat: 55.6876
  },
  {
    zip: 1313,
    city: "København K",
    long: 12.5889,
    lat: 55.687
  },
  {
    zip: 1314,
    city: "København K",
    long: 12.5863,
    lat: 55.6875
  },
  {
    zip: 1315,
    city: "København K",
    long: 12.5879,
    lat: 55.6876
  },
  {
    zip: 1316,
    city: "København K",
    long: 12.5828,
    lat: 55.6883
  },
  {
    zip: 1317,
    city: "København K",
    long: 12.5832,
    lat: 55.6889
  },
  {
    zip: 1318,
    city: "København K",
    long: 12.5848,
    lat: 55.6885
  },
  {
    zip: 1319,
    city: "København K",
    long: 12.5871,
    lat: 55.688
  },
  {
    zip: 1320,
    city: "København K",
    long: 12.5875,
    lat: 55.6885
  },
  {
    zip: 1321,
    city: "København K",
    long: 12.5895,
    lat: 55.6879
  },
  {
    zip: 1322,
    city: "København K",
    long: 12.5894,
    lat: 55.6884
  },
  {
    zip: 1323,
    city: "København K",
    long: 12.5857,
    lat: 55.6897
  },
  {
    zip: 1324,
    city: "København K",
    long: 12.5871,
    lat: 55.6893
  },
  {
    zip: 1325,
    city: "København K",
    long: 12.5885,
    lat: 55.6893
  },
  {
    zip: 1326,
    city: "København K",
    long: 12.5884,
    lat: 55.6896
  },
  {
    zip: 1327,
    city: "København K",
    long: 12.5872,
    lat: 55.6904
  },
  {
    zip: 1328,
    city: "København K",
    long: 12.5884,
    lat: 55.6899
  },
  {
    zip: 1329,
    city: "København K",
    long: 12.5846,
    lat: 55.6891
  },
  {
    zip: 1350,
    city: "København K",
    long: 12.5759,
    lat: 55.6866
  },
  {
    zip: 1352,
    city: "København K",
    long: 12.5731,
    lat: 55.6894
  },
  {
    zip: 1353,
    city: "København K",
    long: 12.5712,
    lat: 55.687
  },
  {
    zip: 1354,
    city: "København K",
    long: 12.571,
    lat: 55.6898
  },
  {
    zip: 1355,
    city: "København K",
    long: 12.5712,
    lat: 55.6887
  },
  {
    zip: 1356,
    city: "København K",
    long: 12.568,
    lat: 55.6872
  },
  {
    zip: 1357,
    city: "København K",
    long: 12.5681,
    lat: 55.6886
  },
  {
    zip: 1358,
    city: "København K",
    long: 12.567,
    lat: 55.6806
  },
  {
    zip: 1359,
    city: "København K",
    long: 12.5642,
    lat: 55.6837
  },
  {
    zip: 1360,
    city: "København K",
    long: 12.5666,
    lat: 55.6857
  },
  {
    zip: 1361,
    city: "København K",
    long: 12.5688,
    lat: 55.683
  },
  {
    zip: 1362,
    city: "København K",
    long: 12.5699,
    lat: 55.6849
  },
  {
    zip: 1363,
    city: "København K",
    long: 12.5656,
    lat: 55.6851
  },
  {
    zip: 1364,
    city: "København K",
    long: 12.5664,
    lat: 55.6821
  },
  {
    zip: 1365,
    city: "København K",
    long: 12.5644,
    lat: 55.6821
  },
  {
    zip: 1366,
    city: "København K",
    long: 12.5633,
    lat: 55.6821
  },
  {
    zip: 1367,
    city: "København K",
    long: 12.5636,
    lat: 55.6831
  },
  {
    zip: 1368,
    city: "København K",
    long: 12.5638,
    lat: 55.6814
  },
  {
    zip: 1369,
    city: "København K",
    long: 12.5595,
    lat: 55.6821
  },
  {
    zip: 1370,
    city: "København K",
    long: 12.5635,
    lat: 55.6848
  },
  {
    zip: 1371,
    city: "København K",
    long: 12.564,
    lat: 55.6859
  },
  {
    zip: 1400,
    city: "København K",
    long: 12.5968,
    lat: 55.6704
  },
  {
    zip: 1401,
    city: "København K",
    long: 12.5957,
    lat: 55.6773
  },
  {
    zip: 1402,
    city: "København K",
    long: 12.5854,
    lat: 55.6728
  },
  {
    zip: 1403,
    city: "København K",
    long: 12.5941,
    lat: 55.6754
  },
  {
    zip: 1406,
    city: "København K",
    long: 12.5934,
    lat: 55.6749
  },
  {
    zip: 1407,
    city: "København K",
    long: 12.5955,
    lat: 55.6736
  },
  {
    zip: 1408,
    city: "København K",
    long: 12.5909,
    lat: 55.6736
  },
  {
    zip: 1409,
    city: "København K",
    long: 12.587,
    lat: 55.674
  },
  {
    zip: 1410,
    city: "København K",
    long: 12.5911,
    lat: 55.672
  },
  {
    zip: 1411,
    city: "København K",
    long: 12.583,
    lat: 55.6707
  },
  {
    zip: 1412,
    city: "København K",
    long: 12.5861,
    lat: 55.6706
  },
  {
    zip: 1413,
    city: "København K",
    long: 12.5867,
    lat: 55.6706
  },
  {
    zip: 1414,
    city: "København K",
    long: 12.5897,
    lat: 55.6723
  },
  {
    zip: 1415,
    city: "København K",
    long: 12.595,
    lat: 55.6744
  },
  {
    zip: 1416,
    city: "København K",
    long: 12.5945,
    lat: 55.673
  },
  {
    zip: 1417,
    city: "København K",
    long: 12.5924,
    lat: 55.6727
  },
  {
    zip: 1418,
    city: "København K",
    long: 12.5902,
    lat: 55.6713
  },
  {
    zip: 1419,
    city: "København K",
    long: 12.589,
    lat: 55.6705
  },
  {
    zip: 1420,
    city: "København K",
    long: 12.59,
    lat: 55.6707
  },
  {
    zip: 1421,
    city: "København K",
    long: 12.5881,
    lat: 55.6703
  },
  {
    zip: 1422,
    city: "København K",
    long: 12.6008,
    lat: 55.6758
  },
  {
    zip: 1423,
    city: "København K",
    long: 12.5928,
    lat: 55.6707
  },
  {
    zip: 1424,
    city: "København K",
    long: 12.5922,
    lat: 55.6693
  },
  {
    zip: 1425,
    city: "København K",
    long: 12.5943,
    lat: 55.6718
  },
  {
    zip: 1426,
    city: "København K",
    long: 12.5967,
    lat: 55.6722
  },
  {
    zip: 1427,
    city: "København K",
    long: 12.5974,
    lat: 55.675
  },
  {
    zip: 1428,
    city: "København K",
    long: 12.5975,
    lat: 55.6755
  },
  {
    zip: 1429,
    city: "København K",
    long: 12.5983,
    lat: 55.6753
  },
  {
    zip: 1430,
    city: "København K",
    long: 12.5986,
    lat: 55.677
  },
  {
    zip: 1432,
    city: "København K",
    long: 12.6166,
    lat: 55.6943
  },
  {
    zip: 1433,
    city: "København K",
    long: 12.7243,
    lat: 55.7295
  },
  {
    zip: 1434,
    city: "København K",
    long: 12.6008,
    lat: 55.6783
  },
  {
    zip: 1435,
    city: "København K",
    long: 12.6061,
    lat: 55.6803
  },
  {
    zip: 1436,
    city: "København K",
    long: 12.6036,
    lat: 55.676
  },
  {
    zip: 1437,
    city: "København K",
    long: 12.6076,
    lat: 55.6822
  },
  {
    zip: 1438,
    city: "København K",
    long: 12.6002,
    lat: 55.6825
  },
  {
    zip: 1439,
    city: "København K",
    long: 12.6064,
    lat: 55.6867
  },
  {
    zip: 1440,
    city: "København K",
    long: 12.6014,
    lat: 55.6731
  },
  {
    zip: 1441,
    city: "København K",
    long: 12.6129,
    lat: 55.6799
  },
  {
    zip: 1450,
    city: "København K",
    long: 12.5731,
    lat: 55.6773
  },
  {
    zip: 1451,
    city: "København K",
    long: 12.5692,
    lat: 55.6801
  },
  {
    zip: 1452,
    city: "København K",
    long: 12.5683,
    lat: 55.6795
  },
  {
    zip: 1453,
    city: "København K",
    long: 12.5708,
    lat: 55.6799
  },
  {
    zip: 1454,
    city: "København K",
    long: 12.5696,
    lat: 55.6781
  },
  {
    zip: 1455,
    city: "København K",
    long: 12.5703,
    lat: 55.6788
  },
  {
    zip: 1456,
    city: "København K",
    long: 12.5693,
    lat: 55.6773
  },
  {
    zip: 1457,
    city: "København K",
    long: 12.5719,
    lat: 55.6782
  },
  {
    zip: 1458,
    city: "København K",
    long: 12.572,
    lat: 55.677
  },
  {
    zip: 1459,
    city: "København K",
    long: 12.5718,
    lat: 55.6775
  },
  {
    zip: 1460,
    city: "København K",
    long: 12.5708,
    lat: 55.6766
  },
  {
    zip: 1461,
    city: "København K",
    long: 12.573,
    lat: 55.6768
  },
  {
    zip: 1462,
    city: "København K",
    long: 12.5718,
    lat: 55.6762
  },
  {
    zip: 1463,
    city: "København K",
    long: 12.5722,
    lat: 55.6757
  },
  {
    zip: 1464,
    city: "København K",
    long: 12.5726,
    lat: 55.6764
  },
  {
    zip: 1465,
    city: "København K",
    long: 12.5734,
    lat: 55.6761
  },
  {
    zip: 1466,
    city: "København K",
    long: 12.5741,
    lat: 55.6769
  },
  {
    zip: 1467,
    city: "København K",
    long: 12.5741,
    lat: 55.6761
  },
  {
    zip: 1468,
    city: "København K",
    long: 12.5734,
    lat: 55.6755
  },
  {
    zip: 1470,
    city: "København K",
    long: 12.5739,
    lat: 55.6751
  },
  {
    zip: 1471,
    city: "København K",
    long: 12.575,
    lat: 55.6743
  },
  {
    zip: 1472,
    city: "København K",
    long: 12.5763,
    lat: 55.6737
  },
  {
    zip: 1473,
    city: "København K",
    long: 12.5783,
    lat: 55.6723
  },
  {
    zip: 1550,
    city: "København V",
    long: 12.5679,
    lat: 55.6763
  },
  {
    zip: 1551,
    city: "København V",
    long: 12.5648,
    lat: 55.6792
  },
  {
    zip: 1552,
    city: "København V",
    long: 12.5737,
    lat: 55.6743
  },
  {
    zip: 1553,
    city: "København V",
    long: 12.5691,
    lat: 55.6746
  },
  {
    zip: 1554,
    city: "København V",
    long: 12.5649,
    lat: 55.6771
  },
  {
    zip: 1555,
    city: "København V",
    long: 12.5751,
    lat: 55.675
  },
  {
    zip: 1556,
    city: "København V",
    long: 12.5735,
    lat: 55.6735
  },
  {
    zip: 1557,
    city: "København V",
    long: 12.5749,
    lat: 55.6732
  },
  {
    zip: 1558,
    city: "København V",
    long: 12.5771,
    lat: 55.6719
  },
  {
    zip: 1559,
    city: "København V",
    long: 12.5776,
    lat: 55.6715
  },
  {
    zip: 1560,
    city: "København V",
    long: 12.5708,
    lat: 55.6667
  },
  {
    zip: 1561,
    city: "København V",
    long: 12.5624,
    lat: 55.6609
  },
  {
    zip: 1562,
    city: "København V",
    long: 12.5748,
    lat: 55.6704
  },
  {
    zip: 1563,
    city: "København V",
    long: 12.5736,
    lat: 55.6708
  },
  {
    zip: 1564,
    city: "København V",
    long: 12.5762,
    lat: 55.6724
  },
  {
    zip: 1567,
    city: "København V",
    long: 12.5711,
    lat: 55.6699
  },
  {
    zip: 1568,
    city: "København V",
    long: 12.5727,
    lat: 55.6691
  },
  {
    zip: 1569,
    city: "København V",
    long: 12.5707,
    lat: 55.6713
  },
  {
    zip: 1570,
    city: "København V",
    long: 12.5645,
    lat: 55.6736
  },
  {
    zip: 1571,
    city: "København V",
    long: 12.5723,
    lat: 55.6708
  },
  {
    zip: 1572,
    city: "København V",
    long: 12.573,
    lat: 55.6716
  },
  {
    zip: 1573,
    city: "København V",
    long: 12.5741,
    lat: 55.6717
  },
  {
    zip: 1574,
    city: "København V",
    long: 12.5722,
    lat: 55.6716
  },
  {
    zip: 1575,
    city: "København V",
    long: 12.5706,
    lat: 55.672
  },
  {
    zip: 1576,
    city: "København V",
    long: 12.5694,
    lat: 55.6711
  },
  {
    zip: 1577,
    city: "København V",
    long: 12.568,
    lat: 55.669
  },
  {
    zip: 1600,
    city: "København V",
    long: 12.5626,
    lat: 55.6799
  },
  {
    zip: 1601,
    city: "København V",
    long: 12.5594,
    lat: 55.6788
  },
  {
    zip: 1602,
    city: "København V",
    long: 12.5613,
    lat: 55.6787
  },
  {
    zip: 1603,
    city: "København V",
    long: 12.5622,
    lat: 55.6793
  },
  {
    zip: 1604,
    city: "København V",
    long: 12.5614,
    lat: 55.6774
  },
  {
    zip: 1605,
    city: "København V",
    long: 12.5611,
    lat: 55.676
  },
  {
    zip: 1606,
    city: "København V",
    long: 12.5623,
    lat: 55.6781
  },
  {
    zip: 1607,
    city: "København V",
    long: 12.5638,
    lat: 55.6786
  },
  {
    zip: 1608,
    city: "København V",
    long: 12.5653,
    lat: 55.6761
  },
  {
    zip: 1609,
    city: "København V",
    long: 12.5638,
    lat: 55.6758
  },
  {
    zip: 1610,
    city: "København V",
    long: 12.5577,
    lat: 55.6746
  },
  {
    zip: 1611,
    city: "København V",
    long: 12.5636,
    lat: 55.6752
  },
  {
    zip: 1612,
    city: "København V",
    long: 12.5627,
    lat: 55.6756
  },
  {
    zip: 1613,
    city: "København V",
    long: 12.5616,
    lat: 55.6745
  },
  {
    zip: 1614,
    city: "København V",
    long: 12.5607,
    lat: 55.6741
  },
  {
    zip: 1615,
    city: "København V",
    long: 12.5591,
    lat: 55.6739
  },
  {
    zip: 1616,
    city: "København V",
    long: 12.5571,
    lat: 55.6731
  },
  {
    zip: 1617,
    city: "København V",
    long: 12.5546,
    lat: 55.6729
  },
  {
    zip: 1618,
    city: "København V",
    long: 12.5513,
    lat: 55.6738
  },
  {
    zip: 1619,
    city: "København V",
    long: 12.5502,
    lat: 55.6738
  },
  {
    zip: 1620,
    city: "København V",
    long: 12.5591,
    lat: 55.6726
  },
  {
    zip: 1621,
    city: "København V",
    long: 12.5477,
    lat: 55.6729
  },
  {
    zip: 1622,
    city: "København V",
    long: 12.5466,
    lat: 55.6725
  },
  {
    zip: 1623,
    city: "København V",
    long: 12.5453,
    lat: 55.6719
  },
  {
    zip: 1624,
    city: "København V",
    long: 12.546,
    lat: 55.6721
  },
  {
    zip: 1631,
    city: "København V",
    long: 12.5555,
    lat: 55.6825
  },
  {
    zip: 1632,
    city: "København V",
    long: 12.5555,
    lat: 55.6834
  },
  {
    zip: 1633,
    city: "København V",
    long: 12.5564,
    lat: 55.6823
  },
  {
    zip: 1634,
    city: "København V",
    long: 12.5555,
    lat: 55.6819
  },
  {
    zip: 1635,
    city: "København V",
    long: 12.5563,
    lat: 55.6828
  },
  {
    zip: 1650,
    city: "København V",
    long: 12.552,
    lat: 55.6687
  },
  {
    zip: 1651,
    city: "København V",
    long: 12.5653,
    lat: 55.6713
  },
  {
    zip: 1652,
    city: "København V",
    long: 12.562,
    lat: 55.6724
  },
  {
    zip: 1653,
    city: "København V",
    long: 12.561,
    lat: 55.6723
  },
  {
    zip: 1654,
    city: "København V",
    long: 12.5593,
    lat: 55.6716
  },
  {
    zip: 1655,
    city: "København V",
    long: 12.5582,
    lat: 55.6712
  },
  {
    zip: 1656,
    city: "København V",
    long: 12.5563,
    lat: 55.6714
  },
  {
    zip: 1657,
    city: "København V",
    long: 12.5558,
    lat: 55.6705
  },
  {
    zip: 1658,
    city: "København V",
    long: 12.5541,
    lat: 55.6705
  },
  {
    zip: 1659,
    city: "København V",
    long: 12.5545,
    lat: 55.6718
  },
  {
    zip: 1660,
    city: "København V",
    long: 12.5526,
    lat: 55.6709
  },
  {
    zip: 1661,
    city: "København V",
    long: 12.5519,
    lat: 55.6716
  },
  {
    zip: 1662,
    city: "København V",
    long: 12.5508,
    lat: 55.6715
  },
  {
    zip: 1663,
    city: "København V",
    long: 12.55,
    lat: 55.6706
  },
  {
    zip: 1664,
    city: "København V",
    long: 12.5492,
    lat: 55.6719
  },
  {
    zip: 1665,
    city: "København V",
    long: 12.5486,
    lat: 55.6708
  },
  {
    zip: 1666,
    city: "København V",
    long: 12.5473,
    lat: 55.6698
  },
  {
    zip: 1667,
    city: "København V",
    long: 12.5462,
    lat: 55.6691
  },
  {
    zip: 1668,
    city: "København V",
    long: 12.5479,
    lat: 55.6688
  },
  {
    zip: 1669,
    city: "København V",
    long: 12.5477,
    lat: 55.6657
  },
  {
    zip: 1670,
    city: "København V",
    long: 12.545,
    lat: 55.6671
  },
  {
    zip: 1671,
    city: "København V",
    long: 12.5453,
    lat: 55.6684
  },
  {
    zip: 1672,
    city: "København V",
    long: 12.5464,
    lat: 55.6686
  },
  {
    zip: 1673,
    city: "København V",
    long: 12.5465,
    lat: 55.668
  },
  {
    zip: 1674,
    city: "København V",
    long: 12.5459,
    lat: 55.6706
  },
  {
    zip: 1675,
    city: "København V",
    long: 12.5469,
    lat: 55.6665
  },
  {
    zip: 1676,
    city: "København V",
    long: 12.5484,
    lat: 55.6662
  },
  {
    zip: 1677,
    city: "København V",
    long: 12.547,
    lat: 55.666
  },
  {
    zip: 1699,
    city: "København V",
    long: 12.5629,
    lat: 55.6681
  },
  {
    zip: 1700,
    city: "København V",
    long: 12.5623,
    lat: 55.6696
  },
  {
    zip: 1701,
    city: "København V",
    long: 12.5633,
    lat: 55.6718
  },
  {
    zip: 1702,
    city: "København V",
    long: 12.5638,
    lat: 55.6713
  },
  {
    zip: 1703,
    city: "København V",
    long: 12.5629,
    lat: 55.6706
  },
  {
    zip: 1704,
    city: "København V",
    long: 12.57,
    lat: 55.6731
  },
  {
    zip: 1705,
    city: "København V",
    long: 12.5602,
    lat: 55.6651
  },
  {
    zip: 1706,
    city: "København V",
    long: 12.5599,
    lat: 55.6707
  },
  {
    zip: 1707,
    city: "København V",
    long: 12.5606,
    lat: 55.6719
  },
  {
    zip: 1708,
    city: "København V",
    long: 12.5575,
    lat: 55.6696
  },
  {
    zip: 1709,
    city: "København V",
    long: 12.5544,
    lat: 55.6683
  },
  {
    zip: 1710,
    city: "København V",
    long: 12.5629,
    lat: 55.6702
  },
  {
    zip: 1711,
    city: "København V",
    long: 12.5594,
    lat: 55.6677
  },
  {
    zip: 1712,
    city: "København V",
    long: 12.5578,
    lat: 55.6684
  },
  {
    zip: 1714,
    city: "København V",
    long: 12.5584,
    lat: 55.666
  },
  {
    zip: 1715,
    city: "København V",
    long: 12.5606,
    lat: 55.6687
  },
  {
    zip: 1716,
    city: "København V",
    long: 12.5589,
    lat: 55.6688
  },
  {
    zip: 1717,
    city: "København V",
    long: 12.5573,
    lat: 55.6671
  },
  {
    zip: 1718,
    city: "København V",
    long: 12.5556,
    lat: 55.6671
  },
  {
    zip: 1719,
    city: "København V",
    long: 12.5548,
    lat: 55.667
  },
  {
    zip: 1720,
    city: "København V",
    long: 12.5406,
    lat: 55.6636
  },
  {
    zip: 1721,
    city: "København V",
    long: 12.5533,
    lat: 55.6662
  },
  {
    zip: 1722,
    city: "København V",
    long: 12.5542,
    lat: 55.6666
  },
  {
    zip: 1723,
    city: "København V",
    long: 12.5523,
    lat: 55.6673
  },
  {
    zip: 1724,
    city: "København V",
    long: 12.552,
    lat: 55.6681
  },
  {
    zip: 1725,
    city: "København V",
    long: 12.5538,
    lat: 55.6657
  },
  {
    zip: 1726,
    city: "København V",
    long: 12.5526,
    lat: 55.6656
  },
  {
    zip: 1727,
    city: "København V",
    long: 12.5516,
    lat: 55.6653
  },
  {
    zip: 1728,
    city: "København V",
    long: 12.5506,
    lat: 55.6648
  },
  {
    zip: 1729,
    city: "København V",
    long: 12.5492,
    lat: 55.6646
  },
  {
    zip: 1730,
    city: "København V",
    long: 12.5482,
    lat: 55.6644
  },
  {
    zip: 1731,
    city: "København V",
    long: 12.5469,
    lat: 55.6641
  },
  {
    zip: 1732,
    city: "København V",
    long: 12.5457,
    lat: 55.6639
  },
  {
    zip: 1733,
    city: "København V",
    long: 12.5443,
    lat: 55.6637
  },
  {
    zip: 1734,
    city: "København V",
    long: 12.5457,
    lat: 55.6652
  },
  {
    zip: 1735,
    city: "København V",
    long: 12.5454,
    lat: 55.6648
  },
  {
    zip: 1736,
    city: "København V",
    long: 12.5436,
    lat: 55.6652
  },
  {
    zip: 1737,
    city: "København V",
    long: 12.5445,
    lat: 55.6648
  },
  {
    zip: 1738,
    city: "København V",
    long: 12.5438,
    lat: 55.6645
  },
  {
    zip: 1739,
    city: "København V",
    long: 12.543,
    lat: 55.6644
  },
  {
    zip: 1749,
    city: "København V",
    long: 12.537,
    lat: 55.6695
  },
  {
    zip: 1750,
    city: "København V",
    long: 12.5398,
    lat: 55.6677
  },
  {
    zip: 1751,
    city: "København V",
    long: 12.5448,
    lat: 55.6701
  },
  {
    zip: 1752,
    city: "København V",
    long: 12.5429,
    lat: 55.67
  },
  {
    zip: 1753,
    city: "København V",
    long: 12.5434,
    lat: 55.6696
  },
  {
    zip: 1754,
    city: "København V",
    long: 12.5441,
    lat: 55.6693
  },
  {
    zip: 1755,
    city: "København V",
    long: 12.5427,
    lat: 55.6697
  },
  {
    zip: 1756,
    city: "København V",
    long: 12.542,
    lat: 55.669
  },
  {
    zip: 1757,
    city: "København V",
    long: 12.5408,
    lat: 55.6692
  },
  {
    zip: 1758,
    city: "København V",
    long: 12.543,
    lat: 55.6673
  },
  {
    zip: 1759,
    city: "København V",
    long: 12.5433,
    lat: 55.6685
  },
  {
    zip: 1760,
    city: "København V",
    long: 12.5455,
    lat: 55.6657
  },
  {
    zip: 1761,
    city: "København V",
    long: 12.5412,
    lat: 55.6677
  },
  {
    zip: 1762,
    city: "København V",
    long: 12.5409,
    lat: 55.6656
  },
  {
    zip: 1763,
    city: "København V",
    long: 12.5421,
    lat: 55.6657
  },
  {
    zip: 1764,
    city: "København V",
    long: 12.5394,
    lat: 55.665
  },
  {
    zip: 1765,
    city: "København V",
    long: 12.5391,
    lat: 55.6644
  },
  {
    zip: 1766,
    city: "København V",
    long: 12.5407,
    lat: 55.6641
  },
  {
    zip: 1770,
    city: "København V",
    long: 12.5366,
    lat: 55.6682
  },
  {
    zip: 1771,
    city: "København V",
    long: 12.5392,
    lat: 55.6685
  },
  {
    zip: 1772,
    city: "København V",
    long: 12.5386,
    lat: 55.6683
  },
  {
    zip: 1773,
    city: "København V",
    long: 12.538,
    lat: 55.6682
  },
  {
    zip: 1774,
    city: "København V",
    long: 12.539,
    lat: 55.668
  },
  {
    zip: 1775,
    city: "København V",
    long: 12.5368,
    lat: 55.6679
  },
  {
    zip: 1777,
    city: "København V",
    long: 12.5376,
    lat: 55.667
  },
  {
    zip: 1799,
    city: "København V",
    long: 12.5334,
    lat: 55.6659
  },
  {
    zip: 1800,
    city: "Frederiksberg C",
    long: 12.536,
    lat: 55.6705
  },
  {
    zip: 1801,
    city: "Frederiksberg C",
    long: 12.5341,
    lat: 55.6691
  },
  {
    zip: 1802,
    city: "Frederiksberg C",
    long: 12.5346,
    lat: 55.6701
  },
  {
    zip: 1803,
    city: "Frederiksberg C",
    long: 12.5334,
    lat: 55.67
  },
  {
    zip: 1804,
    city: "Frederiksberg C",
    long: 12.5323,
    lat: 55.67
  },
  {
    zip: 1805,
    city: "Frederiksberg C",
    long: 12.5312,
    lat: 55.668
  },
  {
    zip: 1806,
    city: "Frederiksberg C",
    long: 12.5342,
    lat: 55.6722
  },
  {
    zip: 1807,
    city: "Frederiksberg C",
    long: 12.5333,
    lat: 55.6712
  },
  {
    zip: 1808,
    city: "Frederiksberg C",
    long: 12.5343,
    lat: 55.6716
  },
  {
    zip: 1809,
    city: "Frederiksberg C",
    long: 12.5355,
    lat: 55.6716
  },
  {
    zip: 1810,
    city: "Frederiksberg C",
    long: 12.5396,
    lat: 55.6715
  },
  {
    zip: 1811,
    city: "Frederiksberg C",
    long: 12.5368,
    lat: 55.6725
  },
  {
    zip: 1812,
    city: "Frederiksberg C",
    long: 12.537,
    lat: 55.6712
  },
  {
    zip: 1813,
    city: "Frederiksberg C",
    long: 12.5387,
    lat: 55.6724
  },
  {
    zip: 1814,
    city: "Frederiksberg C",
    long: 12.5413,
    lat: 55.6715
  },
  {
    zip: 1815,
    city: "Frederiksberg C",
    long: 12.5424,
    lat: 55.6727
  },
  {
    zip: 1816,
    city: "Frederiksberg C",
    long: 12.5434,
    lat: 55.6728
  },
  {
    zip: 1817,
    city: "Frederiksberg C",
    long: 12.543,
    lat: 55.6721
  },
  {
    zip: 1818,
    city: "Frederiksberg C",
    long: 12.5449,
    lat: 55.6725
  },
  {
    zip: 1819,
    city: "Frederiksberg C",
    long: 12.5494,
    lat: 55.674
  },
  {
    zip: 1820,
    city: "Frederiksberg C",
    long: 12.5346,
    lat: 55.6741
  },
  {
    zip: 1822,
    city: "Frederiksberg C",
    long: 12.5461,
    lat: 55.6727
  },
  {
    zip: 1823,
    city: "Frederiksberg C",
    long: 12.5454,
    lat: 55.6729
  },
  {
    zip: 1824,
    city: "Frederiksberg C",
    long: 12.5471,
    lat: 55.6741
  },
  {
    zip: 1825,
    city: "Frederiksberg C",
    long: 12.5454,
    lat: 55.6742
  },
  {
    zip: 1826,
    city: "Frederiksberg C",
    long: 12.5445,
    lat: 55.6748
  },
  {
    zip: 1827,
    city: "Frederiksberg C",
    long: 12.5431,
    lat: 55.6747
  },
  {
    zip: 1828,
    city: "Frederiksberg C",
    long: 12.5419,
    lat: 55.6748
  },
  {
    zip: 1829,
    city: "Frederiksberg C",
    long: 12.5414,
    lat: 55.6759
  },
  {
    zip: 1850,
    city: "Frederiksberg C",
    long: 12.5363,
    lat: 55.6777
  },
  {
    zip: 1851,
    city: "Frederiksberg C",
    long: 12.5397,
    lat: 55.6757
  },
  {
    zip: 1852,
    city: "Frederiksberg C",
    long: 12.5385,
    lat: 55.6765
  },
  {
    zip: 1853,
    city: "Frederiksberg C",
    long: 12.537,
    lat: 55.6753
  },
  {
    zip: 1854,
    city: "Frederiksberg C",
    long: 12.5345,
    lat: 55.6752
  },
  {
    zip: 1855,
    city: "Frederiksberg C",
    long: 12.5357,
    lat: 55.6762
  },
  {
    zip: 1856,
    city: "Frederiksberg C",
    long: 12.5374,
    lat: 55.6766
  },
  {
    zip: 1857,
    city: "Frederiksberg C",
    long: 12.5356,
    lat: 55.6769
  },
  {
    zip: 1860,
    city: "Frederiksberg C",
    long: 12.5372,
    lat: 55.6811
  },
  {
    zip: 1861,
    city: "Frederiksberg C",
    long: 12.5351,
    lat: 55.6798
  },
  {
    zip: 1862,
    city: "Frederiksberg C",
    long: 12.5362,
    lat: 55.68
  },
  {
    zip: 1863,
    city: "Frederiksberg C",
    long: 12.5373,
    lat: 55.6792
  },
  {
    zip: 1864,
    city: "Frederiksberg C",
    long: 12.5371,
    lat: 55.6784
  },
  {
    zip: 1865,
    city: "Frederiksberg C",
    long: 12.5384,
    lat: 55.6791
  },
  {
    zip: 1866,
    city: "Frederiksberg C",
    long: 12.538,
    lat: 55.6778
  },
  {
    zip: 1867,
    city: "Frederiksberg C",
    long: 12.5398,
    lat: 55.6786
  },
  {
    zip: 1868,
    city: "Frederiksberg C",
    long: 12.5405,
    lat: 55.6777
  },
  {
    zip: 1870,
    city: "Frederiksberg C",
    long: 12.541,
    lat: 55.6805
  },
  {
    zip: 1871,
    city: "Frederiksberg C",
    long: 12.5454,
    lat: 55.6809
  },
  {
    zip: 1872,
    city: "Frederiksberg C",
    long: 12.5449,
    lat: 55.6803
  },
  {
    zip: 1873,
    city: "Frederiksberg C",
    long: 12.5453,
    lat: 55.6798
  },
  {
    zip: 1874,
    city: "Frederiksberg C",
    long: 12.5463,
    lat: 55.6795
  },
  {
    zip: 1875,
    city: "Frederiksberg C",
    long: 12.5444,
    lat: 55.6791
  },
  {
    zip: 1876,
    city: "Frederiksberg C",
    long: 12.5451,
    lat: 55.678
  },
  {
    zip: 1877,
    city: "Frederiksberg C",
    long: 12.5431,
    lat: 55.6768
  },
  {
    zip: 1878,
    city: "Frederiksberg C",
    long: 12.5445,
    lat: 55.6766
  },
  {
    zip: 1879,
    city: "Frederiksberg C",
    long: 12.5479,
    lat: 55.6794
  },
  {
    zip: 1900,
    city: "Frederiksberg C",
    long: 12.5557,
    lat: 55.6757
  },
  {
    zip: 1901,
    city: "Frederiksberg C",
    long: 12.5464,
    lat: 55.676
  },
  {
    zip: 1902,
    city: "Frederiksberg C",
    long: 12.5476,
    lat: 55.6769
  },
  {
    zip: 1903,
    city: "Frederiksberg C",
    long: 12.5496,
    lat: 55.6776
  },
  {
    zip: 1904,
    city: "Frederiksberg C",
    long: 12.5504,
    lat: 55.6766
  },
  {
    zip: 1905,
    city: "Frederiksberg C",
    long: 12.5503,
    lat: 55.675
  },
  {
    zip: 1906,
    city: "Frederiksberg C",
    long: 12.5514,
    lat: 55.6753
  },
  {
    zip: 1908,
    city: "Frederiksberg C",
    long: 12.5535,
    lat: 55.6745
  },
  {
    zip: 1909,
    city: "Frederiksberg C",
    long: 12.5527,
    lat: 55.6756
  },
  {
    zip: 1910,
    city: "Frederiksberg C",
    long: 12.5501,
    lat: 55.6796
  },
  {
    zip: 1911,
    city: "Frederiksberg C",
    long: 12.5529,
    lat: 55.6776
  },
  {
    zip: 1912,
    city: "Frederiksberg C",
    long: 12.5517,
    lat: 55.6795
  },
  {
    zip: 1913,
    city: "Frederiksberg C",
    long: 12.5522,
    lat: 55.6783
  },
  {
    zip: 1914,
    city: "Frederiksberg C",
    long: 12.5536,
    lat: 55.6784
  },
  {
    zip: 1915,
    city: "Frederiksberg C",
    long: 12.5519,
    lat: 55.6789
  },
  {
    zip: 1916,
    city: "Frederiksberg C",
    long: 12.557,
    lat: 55.6776
  },
  {
    zip: 1917,
    city: "Frederiksberg C",
    long: 12.5552,
    lat: 55.6768
  },
  {
    zip: 1920,
    city: "Frederiksberg C",
    long: 12.5498,
    lat: 55.6804
  },
  {
    zip: 1921,
    city: "Frederiksberg C",
    long: 12.5534,
    lat: 55.6799
  },
  {
    zip: 1922,
    city: "Frederiksberg C",
    long: 12.5521,
    lat: 55.6806
  },
  {
    zip: 1923,
    city: "Frederiksberg C",
    long: 12.5502,
    lat: 55.6812
  },
  {
    zip: 1924,
    city: "Frederiksberg C",
    long: 12.5517,
    lat: 55.6813
  },
  {
    zip: 1925,
    city: "Frederiksberg C",
    long: 12.5535,
    lat: 55.681
  },
  {
    zip: 1926,
    city: "Frederiksberg C",
    long: 12.5564,
    lat: 55.68
  },
  {
    zip: 1927,
    city: "Frederiksberg C",
    long: 12.5564,
    lat: 55.6794
  },
  {
    zip: 1928,
    city: "Frederiksberg C",
    long: 12.5564,
    lat: 55.6787
  },
  {
    zip: 1950,
    city: "Frederiksberg C",
    long: 12.5357,
    lat: 55.6817
  },
  {
    zip: 1951,
    city: "Frederiksberg C",
    long: 12.5366,
    lat: 55.6821
  },
  {
    zip: 1952,
    city: "Frederiksberg C",
    long: 12.5358,
    lat: 55.6824
  },
  {
    zip: 1953,
    city: "Frederiksberg C",
    long: 12.5372,
    lat: 55.6829
  },
  {
    zip: 1954,
    city: "Frederiksberg C",
    long: 12.5391,
    lat: 55.6841
  },
  {
    zip: 1955,
    city: "Frederiksberg C",
    long: 12.5404,
    lat: 55.6836
  },
  {
    zip: 1956,
    city: "Frederiksberg C",
    long: 12.5413,
    lat: 55.6834
  },
  {
    zip: 1957,
    city: "Frederiksberg C",
    long: 12.5426,
    lat: 55.6833
  },
  {
    zip: 1958,
    city: "Frederiksberg C",
    long: 12.5435,
    lat: 55.685
  },
  {
    zip: 1959,
    city: "Frederiksberg C",
    long: 12.5414,
    lat: 55.6857
  },
  {
    zip: 1960,
    city: "Frederiksberg C",
    long: 12.5495,
    lat: 55.6849
  },
  {
    zip: 1961,
    city: "Frederiksberg C",
    long: 12.5471,
    lat: 55.6819
  },
  {
    zip: 1962,
    city: "Frederiksberg C",
    long: 12.5465,
    lat: 55.6826
  },
  {
    zip: 1963,
    city: "Frederiksberg C",
    long: 12.5481,
    lat: 55.6813
  },
  {
    zip: 1964,
    city: "Frederiksberg C",
    long: 12.5484,
    lat: 55.6844
  },
  {
    zip: 1965,
    city: "Frederiksberg C",
    long: 12.5483,
    lat: 55.6834
  },
  {
    zip: 1966,
    city: "Frederiksberg C",
    long: 12.5495,
    lat: 55.6834
  },
  {
    zip: 1967,
    city: "Frederiksberg C",
    long: 12.5498,
    lat: 55.6842
  },
  {
    zip: 1970,
    city: "Frederiksberg C",
    long: 12.5488,
    lat: 55.6828
  },
  {
    zip: 1971,
    city: "Frederiksberg C",
    long: 12.5523,
    lat: 55.6842
  },
  {
    zip: 1972,
    city: "Frederiksberg C",
    long: 12.5527,
    lat: 55.6837
  },
  {
    zip: 1973,
    city: "Frederiksberg C",
    long: 12.5543,
    lat: 55.6837
  },
  {
    zip: 1974,
    city: "Frederiksberg C",
    long: 12.5538,
    lat: 55.6822
  },
  {
    zip: 2000,
    city: "Frederiksberg",
    long: 12.5156,
    lat: 55.6795
  },
  {
    zip: 2100,
    city: "København Ø",
    long: 12.5737,
    lat: 55.7108
  },
  {
    zip: 2150,
    city: "Nordhavn",
    long: 12.6161,
    lat: 55.7229
  },
  {
    zip: 2200,
    city: "København N",
    long: 12.5491,
    lat: 55.6941
  },
  {
    zip: 2300,
    city: "København S",
    long: 12.6554,
    lat: 55.6736
  },
  {
    zip: 2400,
    city: "København NV",
    long: 12.5288,
    lat: 55.7126
  },
  {
    zip: 2450,
    city: "København SV",
    long: 12.5229,
    lat: 55.64
  },
  {
    zip: 2500,
    city: "Valby",
    long: 12.4987,
    lat: 55.6594
  },
  {
    zip: 2600,
    city: "Glostrup",
    long: 12.397,
    lat: 55.6742
  },
  {
    zip: 2605,
    city: "Brøndby",
    long: 12.4044,
    lat: 55.645
  },
  {
    zip: 2610,
    city: "Rødovre",
    long: 12.4486,
    lat: 55.6818
  },
  {
    zip: 2620,
    city: "Albertslund",
    long: 12.3448,
    lat: 55.687
  },
  {
    zip: 2625,
    city: "Vallensbæk",
    long: 12.3648,
    lat: 55.6392
  },
  {
    zip: 2630,
    city: "Taastrup",
    long: 12.2808,
    lat: 55.6579
  },
  {
    zip: 2635,
    city: "Ishøj",
    long: 12.3948,
    lat: 55.5878
  },
  {
    zip: 2640,
    city: "Hedehusene",
    long: 12.1995,
    lat: 55.6636
  },
  {
    zip: 2650,
    city: "Hvidovre",
    long: 12.461,
    lat: 55.5893
  },
  {
    zip: 2660,
    city: "Brøndby Strand",
    long: 12.4223,
    lat: 55.62
  },
  {
    zip: 2665,
    city: "Vallensbæk Strand",
    long: 12.3884,
    lat: 55.6196
  },
  {
    zip: 2670,
    city: "Greve",
    long: 12.3529,
    lat: 55.541
  },
  {
    zip: 2680,
    city: "Solrød Strand",
    long: 12.2607,
    lat: 55.5151
  },
  {
    zip: 2690,
    city: "Karlslunde",
    long: 12.2137,
    lat: 55.5693
  },
  {
    zip: 2700,
    city: "Brønshøj",
    long: 12.4846,
    lat: 55.7096
  },
  {
    zip: 2720,
    city: "Vanløse",
    long: 12.4819,
    lat: 55.6883
  },
  {
    zip: 2730,
    city: "Herlev",
    long: 12.4258,
    lat: 55.7406
  },
  {
    zip: 2740,
    city: "Skovlunde",
    long: 12.3972,
    lat: 55.7153
  },
  {
    zip: 2750,
    city: "Ballerup",
    long: 12.3638,
    lat: 55.7367
  },
  {
    zip: 2760,
    city: "Måløv",
    long: 12.3208,
    lat: 55.7532
  },
  {
    zip: 2765,
    city: "Smørum",
    long: 12.2812,
    lat: 55.7256
  },
  {
    zip: 2770,
    city: "Kastrup",
    long: 12.787,
    lat: 55.6335
  },
  {
    zip: 2791,
    city: "Dragør",
    long: 12.5912,
    lat: 55.5081
  },
  {
    zip: 2800,
    city: "Kongens Lyngby",
    long: 12.5208,
    lat: 55.7857
  },
  {
    zip: 2820,
    city: "Gentofte",
    long: 12.5334,
    lat: 55.7515
  },
  {
    zip: 2830,
    city: "Virum",
    long: 12.4684,
    lat: 55.7896
  },
  {
    zip: 2840,
    city: "Holte",
    long: 12.4864,
    lat: 55.8168
  },
  {
    zip: 2850,
    city: "Nærum",
    long: 12.5439,
    lat: 55.8175
  },
  {
    zip: 2860,
    city: "Søborg",
    long: 12.4843,
    lat: 55.738
  },
  {
    zip: 2870,
    city: "Dyssegård",
    long: 12.5279,
    lat: 55.7321
  },
  {
    zip: 2880,
    city: "Bagsværd",
    long: 12.4459,
    lat: 55.7619
  },
  {
    zip: 2900,
    city: "Hellerup",
    long: 12.5695,
    lat: 55.7344
  },
  {
    zip: 2920,
    city: "Charlottenlund",
    long: 12.6282,
    lat: 55.7575
  },
  {
    zip: 2930,
    city: "Klampenborg",
    long: 12.6213,
    lat: 55.7961
  },
  {
    zip: 2942,
    city: "Skodsborg",
    long: 12.5926,
    lat: 55.8284
  },
  {
    zip: 2950,
    city: "Vedbæk",
    long: 12.6438,
    lat: 55.8653
  },
  {
    zip: 2960,
    city: "Rungsted Kyst",
    long: 12.5495,
    lat: 55.8869
  },
  {
    zip: 2970,
    city: "Hørsholm",
    long: 12.4389,
    lat: 55.8813
  },
  {
    zip: 2980,
    city: "Kokkedal",
    long: 12.4561,
    lat: 55.9199
  },
  {
    zip: 2990,
    city: "Nivå",
    long: 12.5132,
    lat: 55.9296
  },
  {
    zip: 3000,
    city: "Helsingør",
    long: 12.6125,
    lat: 56.0394
  },
  {
    zip: 3050,
    city: "Humlebæk",
    long: 12.5369,
    lat: 55.9605
  },
  {
    zip: 3060,
    city: "Espergærde",
    long: 12.5428,
    lat: 55.9943
  },
  {
    zip: 3070,
    city: "Snekkersten",
    long: 12.595,
    lat: 56.0047
  },
  {
    zip: 3080,
    city: "Tikøb",
    long: 12.4556,
    lat: 56.0256
  },
  {
    zip: 3100,
    city: "Hornbæk",
    long: 12.4542,
    lat: 56.1012
  },
  {
    zip: 3120,
    city: "Dronningmølle",
    long: 12.3869,
    lat: 56.1071
  },
  {
    zip: 3140,
    city: "Ålsgårde",
    long: 12.5431,
    lat: 56.0909
  },
  {
    zip: 3150,
    city: "Hellebæk",
    long: 12.5478,
    lat: 56.0602
  },
  {
    zip: 3200,
    city: "Helsinge",
    long: 12.1715,
    lat: 56.011
  },
  {
    zip: 3210,
    city: "Vejby",
    long: 12.1307,
    lat: 56.0946
  },
  {
    zip: 3220,
    city: "Tisvildeleje",
    long: 11.9592,
    lat: 56.1278
  },
  {
    zip: 3230,
    city: "Græsted",
    long: 12.0698,
    lat: 56.2275
  },
  {
    zip: 3250,
    city: "Gilleleje",
    long: 12.2935,
    lat: 56.1651
  },
  {
    zip: 3300,
    city: "Frederiksværk",
    long: 12.0563,
    lat: 55.9777
  },
  {
    zip: 3310,
    city: "Ølsted",
    long: 12.0693,
    lat: 55.9116
  },
  {
    zip: 3320,
    city: "Skævinge",
    long: 12.1501,
    lat: 55.9356
  },
  {
    zip: 3330,
    city: "Gørløse",
    long: 12.21,
    lat: 55.8838
  },
  {
    zip: 3360,
    city: "Liseleje",
    long: 11.8761,
    lat: 56.0921
  },
  {
    zip: 3370,
    city: "Melby",
    long: 11.9703,
    lat: 55.9912
  },
  {
    zip: 3390,
    city: "Hundested",
    long: 11.6706,
    lat: 56.2645
  },
  {
    zip: 3400,
    city: "Hillerød",
    long: 12.287,
    lat: 55.9212
  },
  {
    zip: 3450,
    city: "Allerød",
    long: 12.3366,
    lat: 55.8661
  },
  {
    zip: 3460,
    city: "Birkerød",
    long: 12.4176,
    lat: 55.8427
  },
  {
    zip: 3480,
    city: "Fredensborg",
    long: 12.402,
    lat: 55.9709
  },
  {
    zip: 3490,
    city: "Kvistgård",
    long: 12.4954,
    lat: 55.9993
  },
  {
    zip: 3500,
    city: "Værløse",
    long: 12.3559,
    lat: 55.7791
  },
  {
    zip: 3520,
    city: "Farum",
    long: 12.3507,
    lat: 55.8198
  },
  {
    zip: 3540,
    city: "Lynge",
    long: 12.2806,
    lat: 55.8397
  },
  {
    zip: 3550,
    city: "Slangerup",
    long: 12.1745,
    lat: 55.8503
  },
  {
    zip: 3600,
    city: "Frederikssund",
    long: 12.0792,
    lat: 55.8548
  },
  {
    zip: 3630,
    city: "Jægerspris",
    long: 11.9168,
    lat: 55.8693
  },
  {
    zip: 3650,
    city: "Ølstykke",
    long: 12.1609,
    lat: 55.7899
  },
  {
    zip: 3660,
    city: "Stenløse",
    long: 12.2784,
    lat: 55.8008
  },
  {
    zip: 3670,
    city: "Veksø Sjælland",
    long: 12.2373,
    lat: 55.755
  },
  {
    zip: 3700,
    city: "Rønne",
    long: 14.4025,
    lat: 54.984
  },
  {
    zip: 3720,
    city: "Aakirkeby",
    long: 14.7195,
    lat: 54.6297
  },
  {
    zip: 3730,
    city: "Nexø",
    long: 15.395,
    lat: 54.8699
  },
  {
    zip: 3740,
    city: "Svaneke",
    long: 15.7034,
    lat: 55.3088
  },
  {
    zip: 3751,
    city: "Østermarie",
    long: 15.0201,
    lat: 55.1396
  },
  {
    zip: 3760,
    city: "Gudhjem",
    long: 15.215,
    lat: 55.5111
  },
  {
    zip: 3770,
    city: "Allinge",
    long: 14.7638,
    lat: 55.3634
  },
  {
    zip: 3782,
    city: "Klemensker",
    long: 14.8102,
    lat: 55.1926
  },
  {
    zip: 3790,
    city: "Hasle",
    long: 14.5217,
    lat: 55.2284
  },
  {
    zip: 4000,
    city: "Roskilde",
    long: 12.0637,
    lat: 55.6565
  },
  {
    zip: 4030,
    city: "Tune",
    long: 12.1699,
    lat: 55.596
  },
  {
    zip: 4040,
    city: "Jyllinge",
    long: 12.104,
    lat: 55.756
  },
  {
    zip: 4050,
    city: "Skibby",
    long: 12.0135,
    lat: 55.7587
  },
  {
    zip: 4060,
    city: "Kirke Såby",
    long: 11.8738,
    lat: 55.6544
  },
  {
    zip: 4070,
    city: "Kirke Hyllinge",
    long: 11.9242,
    lat: 55.7042
  },
  {
    zip: 4100,
    city: "Ringsted",
    long: 11.8281,
    lat: 55.4305
  },
  {
    zip: 4130,
    city: "Viby Sjælland",
    long: 12.009,
    lat: 55.5501
  },
  {
    zip: 4140,
    city: "Borup",
    long: 11.9709,
    lat: 55.4941
  },
  {
    zip: 4160,
    city: "Herlufmagle",
    long: 11.7728,
    lat: 55.3291
  },
  {
    zip: 4171,
    city: "Glumsø",
    long: 11.673,
    lat: 55.3624
  },
  {
    zip: 4173,
    city: "Fjenneslev",
    long: 11.6642,
    lat: 55.4326
  },
  {
    zip: 4174,
    city: "Jystrup Midtsj",
    long: 11.8555,
    lat: 55.5254
  },
  {
    zip: 4180,
    city: "Sorø",
    long: 11.5573,
    lat: 55.4088
  },
  {
    zip: 4190,
    city: "Munke Bjergby",
    long: 11.5224,
    lat: 55.5016
  },
  {
    zip: 4200,
    city: "Slagelse",
    long: 11.3713,
    lat: 55.4089
  },
  {
    zip: 4220,
    city: "Korsør",
    long: 11.0296,
    lat: 55.348
  },
  {
    zip: 4230,
    city: "Skælskør",
    long: 11.3491,
    lat: 55.1772
  },
  {
    zip: 4241,
    city: "Vemmelev",
    long: 11.2637,
    lat: 55.3641
  },
  {
    zip: 4242,
    city: "Boeslunde",
    long: 11.2683,
    lat: 55.3061
  },
  {
    zip: 4243,
    city: "Rude",
    long: 11.4629,
    lat: 55.2242
  },
  {
    zip: 4244,
    city: "Agersø",
    long: 11.128,
    lat: 55.228
  },
  {
    zip: 4245,
    city: "Omø",
    long: 11.1579,
    lat: 55.1183
  },
  {
    zip: 4250,
    city: "Fuglebjerg",
    long: 11.5523,
    lat: 55.3186
  },
  {
    zip: 4261,
    city: "Dalmose",
    long: 11.4295,
    lat: 55.2822
  },
  {
    zip: 4262,
    city: "Sandved",
    long: 11.5281,
    lat: 55.2508
  },
  {
    zip: 4270,
    city: "Høng",
    long: 11.3055,
    lat: 55.5031
  },
  {
    zip: 4281,
    city: "Gørlev",
    long: 11.0471,
    lat: 55.5189
  },
  {
    zip: 4291,
    city: "Ruds Vedby",
    long: 11.385,
    lat: 55.5525
  },
  {
    zip: 4293,
    city: "Dianalund",
    long: 11.4823,
    lat: 55.5358
  },
  {
    zip: 4295,
    city: "Stenlille",
    long: 11.5775,
    lat: 55.5525
  },
  {
    zip: 4296,
    city: "Nyrup",
    long: 11.6485,
    lat: 55.5406
  },
  {
    zip: 4300,
    city: "Holbæk",
    long: 11.6999,
    lat: 55.7383
  },
  {
    zip: 4305,
    city: "Orø",
    long: 11.8097,
    lat: 55.7824
  },
  {
    zip: 4320,
    city: "Lejre",
    long: 11.957,
    lat: 55.5946
  },
  {
    zip: 4330,
    city: "Hvalsø",
    long: 11.8694,
    lat: 55.5858
  },
  {
    zip: 4340,
    city: "Tølløse",
    long: 11.7453,
    lat: 55.6182
  },
  {
    zip: 4350,
    city: "Ugerløse",
    long: 11.65,
    lat: 55.5902
  },
  {
    zip: 4360,
    city: "Kirke Eskilstrup",
    long: 11.787,
    lat: 55.5644
  },
  {
    zip: 4370,
    city: "Store Merløse",
    long: 11.7241,
    lat: 55.5405
  },
  {
    zip: 4390,
    city: "Vipperød",
    long: 11.7497,
    lat: 55.6627
  },
  {
    zip: 4400,
    city: "Kalundborg",
    long: 10.9743,
    lat: 55.706
  },
  {
    zip: 4420,
    city: "Regstrup",
    long: 11.6071,
    lat: 55.6605
  },
  {
    zip: 4440,
    city: "Mørkøv",
    long: 11.4962,
    lat: 55.6221
  },
  {
    zip: 4450,
    city: "Jyderup",
    long: 11.3873,
    lat: 55.6162
  },
  {
    zip: 4460,
    city: "Snertinge",
    long: 11.3707,
    lat: 55.697
  },
  {
    zip: 4470,
    city: "Svebølle",
    long: 11.2943,
    lat: 55.6572
  },
  {
    zip: 4480,
    city: "Store Fuglede",
    long: 11.1517,
    lat: 55.5741
  },
  {
    zip: 4490,
    city: "Jerslev Sjælland",
    long: 11.2318,
    lat: 55.6173
  },
  {
    zip: 4500,
    city: "Nykøbing Sj",
    long: 11.5634,
    lat: 55.9929
  },
  {
    zip: 4520,
    city: "Svinninge",
    long: 11.4895,
    lat: 55.7174
  },
  {
    zip: 4532,
    city: "Gislinge",
    long: 11.5641,
    lat: 55.7361
  },
  {
    zip: 4534,
    city: "Hørve",
    long: 11.4051,
    lat: 55.7616
  },
  {
    zip: 4540,
    city: "Fårevejle",
    long: 11.374,
    lat: 55.8531
  },
  {
    zip: 4550,
    city: "Asnæs",
    long: 11.4973,
    lat: 55.8119
  },
  {
    zip: 4560,
    city: "Vig",
    long: 11.5604,
    lat: 55.8465
  },
  {
    zip: 4571,
    city: "Grevinge",
    long: 11.587,
    lat: 55.7959
  },
  {
    zip: 4572,
    city: "Nørre Asmindrup",
    long: 11.6233,
    lat: 55.8804
  },
  {
    zip: 4573,
    city: "Højby",
    long: 11.5566,
    lat: 55.9078
  },
  {
    zip: 4581,
    city: "Rørvig",
    long: 11.7173,
    lat: 56.0104
  },
  {
    zip: 4583,
    city: "Sjællands Odde",
    long: 11.262,
    lat: 56.0863
  },
  {
    zip: 4591,
    city: "Føllenslev",
    long: 11.275,
    lat: 55.797
  },
  {
    zip: 4592,
    city: "Sejerø",
    long: 11.0392,
    lat: 55.9207
  },
  {
    zip: 4593,
    city: "Eskebjerg",
    long: 11.2369,
    lat: 55.7277
  },
  {
    zip: 4600,
    city: "Køge",
    long: 12.2202,
    lat: 55.4553
  },
  {
    zip: 4621,
    city: "Gadstrup",
    long: 12.0802,
    lat: 55.5746
  },
  {
    zip: 4622,
    city: "Havdrup",
    long: 12.1127,
    lat: 55.5404
  },
  {
    zip: 4623,
    city: "Lille Skensved",
    long: 12.0851,
    lat: 55.5078
  },
  {
    zip: 4632,
    city: "Bjæverskov",
    long: 12.0269,
    lat: 55.4484
  },
  {
    zip: 4640,
    city: "Faxe",
    long: 12.1241,
    lat: 55.2686
  },
  {
    zip: 4652,
    city: "Hårlev",
    long: 12.2232,
    lat: 55.3625
  },
  {
    zip: 4653,
    city: "Karise",
    long: 12.217,
    lat: 55.2963
  },
  {
    zip: 4654,
    city: "Faxe Ladeplads",
    long: 12.1937,
    lat: 55.1949
  },
  {
    zip: 4660,
    city: "Store Heddinge",
    long: 12.5111,
    lat: 55.3355
  },
  {
    zip: 4671,
    city: "Strøby",
    long: 12.3111,
    lat: 55.4209
  },
  {
    zip: 4672,
    city: "Klippinge",
    long: 12.4343,
    lat: 55.446
  },
  {
    zip: 4673,
    city: "Rødvig Stevns",
    long: 12.3875,
    lat: 55.2009
  },
  {
    zip: 4681,
    city: "Herfølge",
    long: 12.1419,
    lat: 55.4172
  },
  {
    zip: 4682,
    city: "Tureby",
    long: 12.0872,
    lat: 55.3883
  },
  {
    zip: 4683,
    city: "Rønnede",
    long: 12.0228,
    lat: 55.2376
  },
  {
    zip: 4684,
    city: "Holmegaard",
    long: 11.8641,
    lat: 55.2598
  },
  {
    zip: 4690,
    city: "Haslev",
    long: 11.9552,
    lat: 55.3203
  },
  {
    zip: 4700,
    city: "Næstved",
    long: 11.7736,
    lat: 55.195
  },
  {
    zip: 4720,
    city: "Præstø",
    long: 12.1917,
    lat: 55.1221
  },
  {
    zip: 4733,
    city: "Tappernøje",
    long: 11.9857,
    lat: 55.1813
  },
  {
    zip: 4735,
    city: "Mern",
    long: 12.0628,
    lat: 55.0428
  },
  {
    zip: 4736,
    city: "Karrebæksminde",
    long: 11.6362,
    lat: 55.1552
  },
  {
    zip: 4750,
    city: "Lundby",
    long: 11.7806,
    lat: 55.1069
  },
  {
    zip: 4760,
    city: "Vordingborg",
    long: 11.8961,
    lat: 55.0246
  },
  {
    zip: 4771,
    city: "Kalvehave",
    long: 12.1565,
    lat: 55.0089
  },
  {
    zip: 4772,
    city: "Langebæk",
    long: 12.0882,
    lat: 54.9996
  },
  {
    zip: 4773,
    city: "Stensved",
    long: 12.0344,
    lat: 54.9706
  },
  {
    zip: 4780,
    city: "Stege",
    long: 12.3163,
    lat: 54.9363
  },
  {
    zip: 4791,
    city: "Borre",
    long: 12.7284,
    lat: 54.9743
  },
  {
    zip: 4792,
    city: "Askeby",
    long: 12.5255,
    lat: 54.7375
  },
  {
    zip: 4793,
    city: "Bogø By",
    long: 12.0599,
    lat: 54.9238
  },
  {
    zip: 4800,
    city: "Nykøbing F",
    long: 11.9059,
    lat: 54.7908
  },
  {
    zip: 4840,
    city: "Nørre Alslev",
    long: 11.7872,
    lat: 54.9353
  },
  {
    zip: 4850,
    city: "Stubbekøbing",
    long: 12.4118,
    lat: 54.7129
  },
  {
    zip: 4862,
    city: "Guldborg",
    long: 11.6253,
    lat: 54.9048
  },
  {
    zip: 4863,
    city: "Eskilstrup",
    long: 11.9058,
    lat: 54.8601
  },
  {
    zip: 4871,
    city: "Horbelev",
    long: 12.3,
    lat: 54.6999
  },
  {
    zip: 4872,
    city: "Idestrup",
    long: 12.1125,
    lat: 54.7021
  },
  {
    zip: 4873,
    city: "Væggerløse",
    long: 11.9848,
    lat: 54.6636
  },
  {
    zip: 4874,
    city: "Gedser",
    long: 11.9502,
    lat: 54.4961
  },
  {
    zip: 4880,
    city: "Nysted",
    long: 11.7449,
    lat: 54.6294
  },
  {
    zip: 4891,
    city: "Toreby L",
    long: 11.7756,
    lat: 54.7578
  },
  {
    zip: 4892,
    city: "Kettinge",
    long: 11.7461,
    lat: 54.7073
  },
  {
    zip: 4894,
    city: "Øster Ulslev",
    long: 11.6073,
    lat: 54.6855
  },
  {
    zip: 4895,
    city: "Errindlev",
    long: 11.5349,
    lat: 54.6379
  },
  {
    zip: 4900,
    city: "Nakskov",
    long: 10.9884,
    lat: 54.7575
  },
  {
    zip: 4912,
    city: "Harpelunde",
    long: 10.987,
    lat: 54.9051
  },
  {
    zip: 4913,
    city: "Horslunde",
    long: 11.2092,
    lat: 54.9684
  },
  {
    zip: 4920,
    city: "Søllested",
    long: 11.292,
    lat: 54.7994
  },
  {
    zip: 4930,
    city: "Maribo",
    long: 11.4982,
    lat: 54.7666
  },
  {
    zip: 4941,
    city: "Bandholm",
    long: 11.4906,
    lat: 54.8377
  },
  {
    zip: 4942,
    city: "Askø",
    long: 11.5112,
    lat: 54.8991
  },
  {
    zip: 4943,
    city: "Torrig L",
    long: 11.3681,
    lat: 55.0566
  },
  {
    zip: 4944,
    city: "Fejø",
    long: 11.4069,
    lat: 54.9586
  },
  {
    zip: 4945,
    city: "Femø",
    long: 11.5685,
    lat: 54.9844
  },
  {
    zip: 4951,
    city: "Nørreballe",
    long: 11.4281,
    lat: 54.8151
  },
  {
    zip: 4952,
    city: "Stokkemarke",
    long: 11.3791,
    lat: 54.8453
  },
  {
    zip: 4953,
    city: "Vesterborg",
    long: 11.2864,
    lat: 54.8634
  },
  {
    zip: 4960,
    city: "Holeby",
    long: 11.5354,
    lat: 54.7017
  },
  {
    zip: 4970,
    city: "Rødby",
    long: 11.5769,
    lat: 54.5364
  },
  {
    zip: 4983,
    city: "Dannemare",
    long: 11.1725,
    lat: 54.7173
  },
  {
    zip: 4990,
    city: "Sakskøbing",
    long: 11.6357,
    lat: 54.8143
  },
  {
    zip: 5000,
    city: "Odense C",
    long: 10.3917,
    lat: 55.403
  },
  {
    zip: 5200,
    city: "Odense V",
    long: 10.3284,
    lat: 55.394
  },
  {
    zip: 5210,
    city: "Odense NV",
    long: 10.307,
    lat: 55.4175
  },
  {
    zip: 5220,
    city: "Odense SØ",
    long: 10.4983,
    lat: 55.3493
  },
  {
    zip: 5230,
    city: "Odense M",
    long: 10.4114,
    lat: 55.3786
  },
  {
    zip: 5240,
    city: "Odense NØ",
    long: 10.4433,
    lat: 55.4212
  },
  {
    zip: 5250,
    city: "Odense SV",
    long: 10.2979,
    lat: 55.3525
  },
  {
    zip: 5260,
    city: "Odense S",
    long: 10.3992,
    lat: 55.3494
  },
  {
    zip: 5270,
    city: "Odense N",
    long: 10.3571,
    lat: 55.4497
  },
  {
    zip: 5290,
    city: "Marslev",
    long: 10.5325,
    lat: 55.3964
  },
  {
    zip: 5300,
    city: "Kerteminde",
    long: 10.8508,
    lat: 55.4981
  },
  {
    zip: 5320,
    city: "Agedrup",
    long: 10.4891,
    lat: 55.4344
  },
  {
    zip: 5330,
    city: "Munkebo",
    long: 10.5307,
    lat: 55.4683
  },
  {
    zip: 5350,
    city: "Rynkeby",
    long: 10.6253,
    lat: 55.4065
  },
  {
    zip: 5370,
    city: "Mesinge",
    long: 10.6447,
    lat: 55.4899
  },
  {
    zip: 5380,
    city: "Dalby",
    long: 10.7018,
    lat: 55.5172
  },
  {
    zip: 5390,
    city: "Martofte",
    long: 10.6577,
    lat: 55.6158
  },
  {
    zip: 5400,
    city: "Bogense",
    long: 10.1548,
    lat: 55.613
  },
  {
    zip: 5450,
    city: "Otterup",
    long: 10.4104,
    lat: 55.5666
  },
  {
    zip: 5462,
    city: "Morud",
    long: 10.1923,
    lat: 55.4342
  },
  {
    zip: 5463,
    city: "Harndrup",
    long: 10.0292,
    lat: 55.4548
  },
  {
    zip: 5464,
    city: "Brenderup Fyn",
    long: 9.9816,
    lat: 55.4913
  },
  {
    zip: 5466,
    city: "Asperup",
    long: 9.9022,
    lat: 55.5018
  },
  {
    zip: 5471,
    city: "Søndersø",
    long: 10.0837,
    lat: 55.4869
  },
  {
    zip: 5474,
    city: "Veflinge",
    long: 10.1443,
    lat: 55.4626
  },
  {
    zip: 5485,
    city: "Skamby",
    long: 10.2686,
    lat: 55.5197
  },
  {
    zip: 5491,
    city: "Blommenslyst",
    long: 10.2253,
    lat: 55.3888
  },
  {
    zip: 5492,
    city: "Vissenbjerg",
    long: 10.1323,
    lat: 55.3923
  },
  {
    zip: 5500,
    city: "Middelfart",
    long: 9.7849,
    lat: 55.4893
  },
  {
    zip: 5540,
    city: "Ullerslev",
    long: 10.6726,
    lat: 55.3854
  },
  {
    zip: 5550,
    city: "Langeskov",
    long: 10.5895,
    lat: 55.3667
  },
  {
    zip: 5560,
    city: "Aarup",
    long: 10.0385,
    lat: 55.3737
  },
  {
    zip: 5580,
    city: "Nørre Aaby",
    long: 9.7742,
    lat: 55.4155
  },
  {
    zip: 5591,
    city: "Gelsted",
    long: 9.9661,
    lat: 55.3995
  },
  {
    zip: 5592,
    city: "Ejby",
    long: 9.8242,
    lat: 55.3652
  },
  {
    zip: 5600,
    city: "Faaborg",
    long: 10.3095,
    lat: 55.112
  },
  {
    zip: 5601,
    city: "Lyø",
    long: 10.1289,
    lat: 55.029
  },
  {
    zip: 5602,
    city: "Avernakø",
    long: 10.2828,
    lat: 55.0093
  },
  {
    zip: 5603,
    city: "Bjørnø",
    long: 10.2536,
    lat: 55.062
  },
  {
    zip: 5610,
    city: "Assens",
    long: 9.8933,
    lat: 55.2917
  },
  {
    zip: 5620,
    city: "Glamsbjerg",
    long: 10.1034,
    lat: 55.2721
  },
  {
    zip: 5631,
    city: "Ebberup",
    long: 9.9638,
    lat: 55.1318
  },
  {
    zip: 5642,
    city: "Millinge",
    long: 10.1293,
    lat: 55.1506
  },
  {
    zip: 5672,
    city: "Broby",
    long: 10.2521,
    lat: 55.2451
  },
  {
    zip: 5683,
    city: "Haarby",
    long: 10.0703,
    lat: 55.1892
  },
  {
    zip: 5690,
    city: "Tommerup",
    long: 10.1983,
    lat: 55.3196
  },
  {
    zip: 5700,
    city: "Svendborg",
    long: 10.598,
    lat: 55.0144
  },
  {
    zip: 5750,
    city: "Ringe",
    long: 10.4231,
    lat: 55.221
  },
  {
    zip: 5762,
    city: "Vester Skerninge",
    long: 10.4501,
    lat: 55.0634
  },
  {
    zip: 5771,
    city: "Stenstrup",
    long: 10.5235,
    lat: 55.1256
  },
  {
    zip: 5772,
    city: "Kværndrup",
    long: 10.5425,
    lat: 55.1842
  },
  {
    zip: 5792,
    city: "Årslev",
    long: 10.3937,
    lat: 55.2907
  },
  {
    zip: 5800,
    city: "Nyborg",
    long: 10.7979,
    lat: 55.353
  },
  {
    zip: 5853,
    city: "Ørbæk",
    long: 10.6347,
    lat: 55.2661
  },
  {
    zip: 5854,
    city: "Gislev",
    long: 10.6089,
    lat: 55.2123
  },
  {
    zip: 5856,
    city: "Ryslinge",
    long: 10.5437,
    lat: 55.2373
  },
  {
    zip: 5863,
    city: "Ferritslev Fyn",
    long: 10.586,
    lat: 55.3105
  },
  {
    zip: 5871,
    city: "Frørup",
    long: 10.8131,
    lat: 55.2386
  },
  {
    zip: 5874,
    city: "Hesselager",
    long: 10.8,
    lat: 55.1754
  },
  {
    zip: 5881,
    city: "Skårup Fyn",
    long: 10.7626,
    lat: 55.0674
  },
  {
    zip: 5882,
    city: "Vejstrup",
    long: 10.7998,
    lat: 55.0951
  },
  {
    zip: 5883,
    city: "Oure",
    long: 10.7734,
    lat: 55.1178
  },
  {
    zip: 5884,
    city: "Gudme",
    long: 10.7121,
    lat: 55.1496
  },
  {
    zip: 5892,
    city: "Gudbjerg Sydfyn",
    long: 10.6364,
    lat: 55.1551
  },
  {
    zip: 5900,
    city: "Rudkøbing",
    long: 10.8097,
    lat: 54.8852
  },
  {
    zip: 5932,
    city: "Humble",
    long: 10.6344,
    lat: 54.8182
  },
  {
    zip: 5935,
    city: "Bagenkop",
    long: 10.665,
    lat: 54.6575
  },
  {
    zip: 5943,
    city: "Strynø",
    long: 10.5881,
    lat: 54.9009
  },
  {
    zip: 5953,
    city: "Tranekær",
    long: 10.9427,
    lat: 55.0636
  },
  {
    zip: 5960,
    city: "Marstal",
    long: 10.5167,
    lat: 54.8567
  },
  {
    zip: 5965,
    city: "Birkholm",
    long: 10.5092,
    lat: 54.9345
  },
  {
    zip: 5970,
    city: "Ærøskøbing",
    long: 10.336,
    lat: 54.7972
  },
  {
    zip: 5985,
    city: "Søby Ærø",
    long: 10.2181,
    lat: 54.9438
  },
  {
    zip: 6000,
    city: "Kolding",
    long: 9.4678,
    lat: 55.5001
  },
  {
    zip: 6040,
    city: "Egtved",
    long: 9.2909,
    lat: 55.6166
  },
  {
    zip: 6051,
    city: "Almind",
    long: 9.4503,
    lat: 55.5579
  },
  {
    zip: 6052,
    city: "Viuf",
    long: 9.4984,
    lat: 55.5868
  },
  {
    zip: 6064,
    city: "Jordrup",
    long: 9.3183,
    lat: 55.5538
  },
  {
    zip: 6070,
    city: "Christiansfeld",
    long: 9.4475,
    lat: 55.3549
  },
  {
    zip: 6091,
    city: "Bjert",
    long: 9.5599,
    lat: 55.4455
  },
  {
    zip: 6092,
    city: "Sønder Stenderup",
    long: 9.6572,
    lat: 55.4471
  },
  {
    zip: 6093,
    city: "Sjølund",
    long: 9.5383,
    lat: 55.4068
  },
  {
    zip: 6094,
    city: "Hejls",
    long: 9.6203,
    lat: 55.3889
  },
  {
    zip: 6100,
    city: "Haderslev",
    long: 9.62,
    lat: 55.2419
  },
  {
    zip: 6200,
    city: "Aabenraa",
    long: 9.4998,
    lat: 55.029
  },
  {
    zip: 6210,
    city: "Barsø",
    long: 9.5894,
    lat: 55.1226
  },
  {
    zip: 6230,
    city: "Rødekro",
    long: 9.2804,
    lat: 55.0744
  },
  {
    zip: 6240,
    city: "Løgumkloster",
    long: 8.9642,
    lat: 55.0624
  },
  {
    zip: 6261,
    city: "Bredebro",
    long: 8.6809,
    lat: 55.0731
  },
  {
    zip: 6270,
    city: "Tønder",
    long: 8.8945,
    lat: 54.9525
  },
  {
    zip: 6280,
    city: "Højer",
    long: 8.6527,
    lat: 54.9747
  },
  {
    zip: 6300,
    city: "Gråsten",
    long: 9.5579,
    lat: 54.9173
  },
  {
    zip: 6310,
    city: "Broager",
    long: 9.6808,
    lat: 54.8714
  },
  {
    zip: 6320,
    city: "Egernsund",
    long: 9.6106,
    lat: 54.9
  },
  {
    zip: 6330,
    city: "Padborg",
    long: 9.3098,
    lat: 54.8455
  },
  {
    zip: 6340,
    city: "Kruså",
    long: 9.4633,
    lat: 54.8687
  },
  {
    zip: 6360,
    city: "Tinglev",
    long: 9.2035,
    lat: 54.9031
  },
  {
    zip: 6372,
    city: "Bylderup-Bov",
    long: 9.1417,
    lat: 55.0171
  },
  {
    zip: 6392,
    city: "Bolderslev",
    long: 9.2081,
    lat: 54.9843
  },
  {
    zip: 6400,
    city: "Sønderborg",
    long: 9.7108,
    lat: 54.9529
  },
  {
    zip: 6430,
    city: "Nordborg",
    long: 9.7701,
    lat: 55.0694
  },
  {
    zip: 6440,
    city: "Augustenborg",
    long: 10.0078,
    lat: 54.9894
  },
  {
    zip: 6470,
    city: "Sydals",
    long: 10.0359,
    lat: 54.8731
  },
  {
    zip: 6500,
    city: "Vojens",
    long: 9.3184,
    lat: 55.2437
  },
  {
    zip: 6510,
    city: "Gram",
    long: 9.016,
    lat: 55.2765
  },
  {
    zip: 6520,
    city: "Toftlund",
    long: 9.0452,
    lat: 55.1831
  },
  {
    zip: 6534,
    city: "Agerskov",
    long: 9.1585,
    lat: 55.1283
  },
  {
    zip: 6535,
    city: "Branderup J",
    long: 9.0592,
    lat: 55.1209
  },
  {
    zip: 6541,
    city: "Bevtoft",
    long: 9.1975,
    lat: 55.1959
  },
  {
    zip: 6560,
    city: "Sommersted",
    long: 9.2607,
    lat: 55.3245
  },
  {
    zip: 6580,
    city: "Vamdrup",
    long: 9.344,
    lat: 55.4137
  },
  {
    zip: 6600,
    city: "Vejen",
    long: 9.112,
    lat: 55.4784
  },
  {
    zip: 6621,
    city: "Gesten",
    long: 9.1837,
    lat: 55.5361
  },
  {
    zip: 6622,
    city: "Bække",
    long: 9.1567,
    lat: 55.5827
  },
  {
    zip: 6623,
    city: "Vorbasse",
    long: 9.0996,
    lat: 55.635
  },
  {
    zip: 6630,
    city: "Rødding",
    long: 9.1406,
    lat: 55.3847
  },
  {
    zip: 6640,
    city: "Lunderskov",
    long: 9.3288,
    lat: 55.4764
  },
  {
    zip: 6650,
    city: "Brørup",
    long: 8.9973,
    lat: 55.4988
  },
  {
    zip: 6660,
    city: "Lintrup",
    long: 8.9958,
    lat: 55.4178
  },
  {
    zip: 6670,
    city: "Holsted",
    long: 8.9015,
    lat: 55.5112
  },
  {
    zip: 6682,
    city: "Hovborg",
    long: 8.9467,
    lat: 55.6037
  },
  {
    zip: 6683,
    city: "Føvling",
    long: 8.9097,
    lat: 55.4353
  },
  {
    zip: 6690,
    city: "Gørding",
    long: 8.822,
    lat: 55.4813
  },
  {
    zip: 6700,
    city: "Esbjerg",
    long: 8.4617,
    lat: 55.4594
  },
  {
    zip: 6705,
    city: "Esbjerg Ø",
    long: 8.5067,
    lat: 55.4912
  },
  {
    zip: 6710,
    city: "Esbjerg V",
    long: 8.3487,
    lat: 55.5526
  },
  {
    zip: 6715,
    city: "Esbjerg N",
    long: 8.5094,
    lat: 55.5533
  },
  {
    zip: 6720,
    city: "Fanø",
    long: 7.5659,
    lat: 55.2829
  },
  {
    zip: 6731,
    city: "Tjæreborg",
    long: 8.5905,
    lat: 55.4603
  },
  {
    zip: 6740,
    city: "Bramming",
    long: 8.7017,
    lat: 55.4607
  },
  {
    zip: 6752,
    city: "Glejbjerg",
    long: 8.8318,
    lat: 55.5597
  },
  {
    zip: 6753,
    city: "Agerbæk",
    long: 8.8242,
    lat: 55.6085
  },
  {
    zip: 6760,
    city: "Ribe",
    long: 8.7636,
    lat: 55.3114
  },
  {
    zip: 6771,
    city: "Gredstedbro",
    long: 8.6031,
    lat: 55.3712
  },
  {
    zip: 6780,
    city: "Skærbæk",
    long: 8.7909,
    lat: 55.1774
  },
  {
    zip: 6792,
    city: "Rømø",
    long: 8.2901,
    lat: 55.1488
  },
  {
    zip: 6800,
    city: "Varde",
    long: 8.5285,
    lat: 55.6561
  },
  {
    zip: 6818,
    city: "Årre",
    long: 8.7151,
    lat: 55.5769
  },
  {
    zip: 6823,
    city: "Ansager",
    long: 8.7513,
    lat: 55.7212
  },
  {
    zip: 6830,
    city: "Nørre Nebel",
    long: 8.2255,
    lat: 55.7873
  },
  {
    zip: 6840,
    city: "Oksbøl",
    long: 8.2413,
    lat: 55.6384
  },
  {
    zip: 6851,
    city: "Janderup Vestj",
    long: 8.3897,
    lat: 55.6337
  },
  {
    zip: 6852,
    city: "Billum",
    long: 8.3065,
    lat: 55.5954
  },
  {
    zip: 6853,
    city: "Vejers Strand",
    long: 5.2422,
    lat: 55.4329
  },
  {
    zip: 6854,
    city: "Henne",
    long: 4.4359,
    lat: 55.7198
  },
  {
    zip: 6855,
    city: "Outrup",
    long: 8.3741,
    lat: 55.708
  },
  {
    zip: 6857,
    city: "Blåvand",
    long: 6.6069,
    lat: 55.4521
  },
  {
    zip: 6862,
    city: "Tistrup",
    long: 8.6326,
    lat: 55.719
  },
  {
    zip: 6870,
    city: "Ølgod",
    long: 8.6182,
    lat: 55.7935
  },
  {
    zip: 6880,
    city: "Tarm",
    long: 8.541,
    lat: 55.8902
  },
  {
    zip: 6893,
    city: "Hemmet",
    long: 8.3356,
    lat: 55.8526
  },
  {
    zip: 6900,
    city: "Skjern",
    long: 8.5389,
    lat: 55.9909
  },
  {
    zip: 6920,
    city: "Videbæk",
    long: 8.6699,
    lat: 56.0805
  },
  {
    zip: 6933,
    city: "Kibæk",
    long: 8.9295,
    lat: 55.9488
  },
  {
    zip: 6940,
    city: "Lem St",
    long: 8.4232,
    lat: 56.0511
  },
  {
    zip: 6950,
    city: "Ringkøbing",
    long: 4.0746,
    lat: 56.201
  },
  {
    zip: 6960,
    city: "Hvide Sande",
    long: 4.2851,
    lat: 55.9321
  },
  {
    zip: 6971,
    city: "Spjald",
    long: 8.506,
    lat: 56.1536
  },
  {
    zip: 6973,
    city: "Ørnhøj",
    long: 8.5245,
    lat: 56.2152
  },
  {
    zip: 6980,
    city: "Tim",
    long: 8.1968,
    lat: 56.1896
  },
  {
    zip: 6990,
    city: "Ulfborg",
    long: 8.0071,
    lat: 56.3042
  },
  {
    zip: 7000,
    city: "Fredericia",
    long: 9.6692,
    lat: 55.571
  },
  {
    zip: 7080,
    city: "Børkop",
    long: 9.6705,
    lat: 55.6572
  },
  {
    zip: 7100,
    city: "Vejle",
    long: 9.5066,
    lat: 55.6905
  },
  {
    zip: 7120,
    city: "Vejle Øst",
    long: 9.6387,
    lat: 55.722
  },
  {
    zip: 7130,
    city: "Juelsminde",
    long: 10.0292,
    lat: 55.7605
  },
  {
    zip: 7140,
    city: "Stouby",
    long: 9.7842,
    lat: 55.6922
  },
  {
    zip: 7150,
    city: "Barrit",
    long: 9.8978,
    lat: 55.687
  },
  {
    zip: 7160,
    city: "Tørring",
    long: 9.5022,
    lat: 55.8748
  },
  {
    zip: 7171,
    city: "Uldum",
    long: 9.5952,
    lat: 55.8358
  },
  {
    zip: 7173,
    city: "Vonge",
    long: 9.4233,
    lat: 55.8647
  },
  {
    zip: 7182,
    city: "Bredsten",
    long: 9.3651,
    lat: 55.7061
  },
  {
    zip: 7183,
    city: "Randbøl",
    long: 9.2692,
    lat: 55.6781
  },
  {
    zip: 7184,
    city: "Vandel",
    long: 9.1953,
    lat: 55.7151
  },
  {
    zip: 7190,
    city: "Billund",
    long: 9.1,
    lat: 55.7375
  },
  {
    zip: 7200,
    city: "Grindsted",
    long: 8.8989,
    lat: 55.7599
  },
  {
    zip: 7250,
    city: "Hejnsvig",
    long: 8.9646,
    lat: 55.6912
  },
  {
    zip: 7260,
    city: "Sønder Omme",
    long: 8.8934,
    lat: 55.8505
  },
  {
    zip: 7270,
    city: "Stakroge",
    long: 8.8281,
    lat: 55.8927
  },
  {
    zip: 7280,
    city: "Sønder Felding",
    long: 8.8047,
    lat: 55.9423
  },
  {
    zip: 7300,
    city: "Jelling",
    long: 9.4359,
    lat: 55.7685
  },
  {
    zip: 7321,
    city: "Gadbjerg",
    long: 9.3107,
    lat: 55.7703
  },
  {
    zip: 7323,
    city: "Give",
    long: 9.271,
    lat: 55.8574
  },
  {
    zip: 7330,
    city: "Brande",
    long: 9.0912,
    lat: 55.9334
  },
  {
    zip: 7361,
    city: "Ejstrupholm",
    long: 9.2483,
    lat: 56.0238
  },
  {
    zip: 7362,
    city: "Hampen",
    long: 9.3817,
    lat: 56.0652
  },
  {
    zip: 7400,
    city: "Herning",
    long: 8.9878,
    lat: 56.1191
  },
  {
    zip: 7430,
    city: "Ikast",
    long: 9.1925,
    lat: 56.0938
  },
  {
    zip: 7441,
    city: "Bording",
    long: 9.2547,
    lat: 56.1503
  },
  {
    zip: 7442,
    city: "Engesvang",
    long: 9.3039,
    lat: 56.2101
  },
  {
    zip: 7451,
    city: "Sunds",
    long: 9.0259,
    lat: 56.2296
  },
  {
    zip: 7470,
    city: "Karup J",
    long: 9.1742,
    lat: 56.328
  },
  {
    zip: 7480,
    city: "Vildbjerg",
    long: 8.7451,
    lat: 56.1822
  },
  {
    zip: 7490,
    city: "Aulum",
    long: 8.7995,
    lat: 56.27
  },
  {
    zip: 7500,
    city: "Holstebro",
    long: 8.5852,
    lat: 56.3479
  },
  {
    zip: 7540,
    city: "Haderup",
    long: 8.9741,
    lat: 56.3244
  },
  {
    zip: 7550,
    city: "Sørvad",
    long: 8.6653,
    lat: 56.2519
  },
  {
    zip: 7560,
    city: "Hjerm",
    long: 8.649,
    lat: 56.4329
  },
  {
    zip: 7570,
    city: "Vemb",
    long: 8.2724,
    lat: 56.3524
  },
  {
    zip: 7600,
    city: "Struer",
    long: 8.6034,
    lat: 56.5278
  },
  {
    zip: 7620,
    city: "Lemvig",
    long: 8.3345,
    lat: 56.5458
  },
  {
    zip: 7650,
    city: "Bøvlingbjerg",
    long: 5.0456,
    lat: 56.5469
  },
  {
    zip: 7660,
    city: "Bækmarksbro",
    long: 8.3318,
    lat: 56.4155
  },
  {
    zip: 7673,
    city: "Harboøre",
    long: 8.064,
    lat: 56.6287
  },
  {
    zip: 7680,
    city: "Thyborøn",
    long: 6.2658,
    lat: 56.8678
  },
  {
    zip: 7700,
    city: "Thisted",
    long: 7.9068,
    lat: 57.3237
  },
  {
    zip: 7730,
    city: "Hanstholm",
    long: 8.3393,
    lat: 57.4435
  },
  {
    zip: 7741,
    city: "Frøstrup",
    long: 8.917,
    lat: 57.3991
  },
  {
    zip: 7742,
    city: "Vesløs",
    long: 9.0306,
    lat: 57.0057
  },
  {
    zip: 7752,
    city: "Snedsted",
    long: 7.4786,
    lat: 57.2597
  },
  {
    zip: 7755,
    city: "Bedsted Thy",
    long: 7.2161,
    lat: 57.1774
  },
  {
    zip: 7760,
    city: "Hurup Thy",
    long: 8.4291,
    lat: 56.7243
  },
  {
    zip: 7770,
    city: "Vestervig",
    long: 6.9393,
    lat: 57.022
  },
  {
    zip: 7790,
    city: "Thyholm",
    long: 8.5136,
    lat: 56.6277
  },
  {
    zip: 7800,
    city: "Skive",
    long: 8.9951,
    lat: 56.4632
  },
  {
    zip: 7830,
    city: "Vinderup",
    long: 8.8002,
    lat: 56.4777
  },
  {
    zip: 7840,
    city: "Højslev",
    long: 9.1651,
    lat: 56.5968
  },
  {
    zip: 7850,
    city: "Stoholm Jyll",
    long: 9.1285,
    lat: 56.4844
  },
  {
    zip: 7860,
    city: "Spøttrup",
    long: 8.821,
    lat: 56.6242
  },
  {
    zip: 7870,
    city: "Roslev",
    long: 9.0416,
    lat: 56.7244
  },
  {
    zip: 7884,
    city: "Fur",
    long: 9.0055,
    lat: 56.8419
  },
  {
    zip: 7900,
    city: "Nykøbing M",
    long: 8.8846,
    lat: 56.908
  },
  {
    zip: 7950,
    city: "Erslev",
    long: 8.6984,
    lat: 56.8518
  },
  {
    zip: 7960,
    city: "Karby",
    long: 8.5644,
    lat: 56.7613
  },
  {
    zip: 7970,
    city: "Redsted M",
    long: 8.6395,
    lat: 56.7399
  },
  {
    zip: 7980,
    city: "Vils",
    long: 8.7267,
    lat: 56.7484
  },
  {
    zip: 7990,
    city: "Øster Assels",
    long: 8.7003,
    lat: 56.6876
  },
  {
    zip: 8000,
    city: "Aarhus C",
    long: 10.278,
    lat: 56.1505
  },
  {
    zip: 8200,
    city: "Aarhus N",
    long: 10.1592,
    lat: 56.2017
  },
  {
    zip: 8210,
    city: "Aarhus V",
    long: 10.1582,
    lat: 56.1716
  },
  {
    zip: 8220,
    city: "Brabrand",
    long: 10.0679,
    lat: 56.1579
  },
  {
    zip: 8230,
    city: "Åbyhøj",
    long: 10.1605,
    lat: 56.152
  },
  {
    zip: 8240,
    city: "Risskov",
    long: 10.2468,
    lat: 56.1872
  },
  {
    zip: 8250,
    city: "Egå",
    long: 10.2999,
    lat: 56.2221
  },
  {
    zip: 8260,
    city: "Viby J",
    long: 10.1378,
    lat: 56.1264
  },
  {
    zip: 8270,
    city: "Højbjerg",
    long: 10.2896,
    lat: 56.099
  },
  {
    zip: 8300,
    city: "Odder",
    long: 10.2446,
    lat: 55.9246
  },
  {
    zip: 8305,
    city: "Samsø",
    long: 10.6843,
    lat: 55.9118
  },
  {
    zip: 8310,
    city: "Tranbjerg J",
    long: 10.1392,
    lat: 56.0942
  },
  {
    zip: 8320,
    city: "Mårslet",
    long: 10.1531,
    lat: 56.0659
  },
  {
    zip: 8330,
    city: "Beder",
    long: 10.2458,
    lat: 56.063
  },
  {
    zip: 8340,
    city: "Malling",
    long: 10.2151,
    lat: 56.0263
  },
  {
    zip: 8350,
    city: "Hundslund",
    long: 10.0574,
    lat: 55.9055
  },
  {
    zip: 8355,
    city: "Solbjerg",
    long: 10.0866,
    lat: 56.0366
  },
  {
    zip: 8361,
    city: "Hasselager",
    long: 10.0825,
    lat: 56.1012
  },
  {
    zip: 8362,
    city: "Hørning",
    long: 10.0136,
    lat: 56.0937
  },
  {
    zip: 8370,
    city: "Hadsten",
    long: 10.029,
    lat: 56.3387
  },
  {
    zip: 8380,
    city: "Trige",
    long: 10.1609,
    lat: 56.2702
  },
  {
    zip: 8381,
    city: "Tilst",
    long: 10.0975,
    lat: 56.1893
  },
  {
    zip: 8382,
    city: "Hinnerup",
    long: 10.0672,
    lat: 56.2595
  },
  {
    zip: 8400,
    city: "Ebeltoft",
    long: 10.8263,
    lat: 56.1493
  },
  {
    zip: 8410,
    city: "Rønde",
    long: 10.4817,
    lat: 56.3033
  },
  {
    zip: 8420,
    city: "Knebel",
    long: 10.4521,
    lat: 56.1522
  },
  {
    zip: 8444,
    city: "Balle",
    long: 11.1104,
    lat: 56.205
  },
  {
    zip: 8450,
    city: "Hammel",
    long: 9.8818,
    lat: 56.2636
  },
  {
    zip: 8462,
    city: "Harlev J",
    long: 9.9999,
    lat: 56.1406
  },
  {
    zip: 8464,
    city: "Galten",
    long: 9.9118,
    lat: 56.178
  },
  {
    zip: 8471,
    city: "Sabro",
    long: 10.0155,
    lat: 56.2113
  },
  {
    zip: 8472,
    city: "Sporup",
    long: 9.8361,
    lat: 56.2091
  },
  {
    zip: 8500,
    city: "Grenaa",
    long: 11.0822,
    lat: 56.4307
  },
  {
    zip: 8520,
    city: "Lystrup",
    long: 10.2272,
    lat: 56.2444
  },
  {
    zip: 8530,
    city: "Hjortshøj",
    long: 10.205,
    lat: 56.2946
  },
  {
    zip: 8541,
    city: "Skødstrup",
    long: 10.3679,
    lat: 56.2615
  },
  {
    zip: 8543,
    city: "Hornslet",
    long: 10.2972,
    lat: 56.3326
  },
  {
    zip: 8544,
    city: "Mørke",
    long: 10.3825,
    lat: 56.3551
  },
  {
    zip: 8550,
    city: "Ryomgård",
    long: 10.5003,
    lat: 56.3848
  },
  {
    zip: 8560,
    city: "Kolind",
    long: 10.6111,
    lat: 56.3468
  },
  {
    zip: 8570,
    city: "Trustrup",
    long: 10.7422,
    lat: 56.3629
  },
  {
    zip: 8581,
    city: "Nimtofte",
    long: 10.5399,
    lat: 56.4279
  },
  {
    zip: 8585,
    city: "Glesborg",
    long: 10.6477,
    lat: 56.5876
  },
  {
    zip: 8586,
    city: "Ørum Djurs",
    long: 10.627,
    lat: 56.4496
  },
  {
    zip: 8592,
    city: "Anholt",
    long: 11.4901,
    lat: 56.7757
  },
  {
    zip: 8600,
    city: "Silkeborg",
    long: 9.49,
    lat: 56.1715
  },
  {
    zip: 8620,
    city: "Kjellerup",
    long: 9.391,
    lat: 56.2883
  },
  {
    zip: 8632,
    city: "Lemming",
    long: 9.5571,
    lat: 56.2432
  },
  {
    zip: 8641,
    city: "Sorring",
    long: 9.7745,
    lat: 56.1791
  },
  {
    zip: 8643,
    city: "Ans By",
    long: 9.6247,
    lat: 56.2878
  },
  {
    zip: 8653,
    city: "Them",
    long: 9.5504,
    lat: 56.0867
  },
  {
    zip: 8654,
    city: "Bryrup",
    long: 9.4706,
    lat: 56.0249
  },
  {
    zip: 8660,
    city: "Skanderborg",
    long: 9.8924,
    lat: 56.0239
  },
  {
    zip: 8670,
    city: "Låsby",
    long: 9.799,
    lat: 56.1484
  },
  {
    zip: 8680,
    city: "Ry",
    long: 9.7689,
    lat: 56.1042
  },
  {
    zip: 8700,
    city: "Horsens",
    long: 9.893,
    lat: 55.866
  },
  {
    zip: 8721,
    city: "Daugård",
    long: 9.7079,
    lat: 55.725
  },
  {
    zip: 8722,
    city: "Hedensted",
    long: 9.7113,
    lat: 55.7651
  },
  {
    zip: 8723,
    city: "Løsning",
    long: 9.6942,
    lat: 55.8139
  },
  {
    zip: 8732,
    city: "Hovedgård",
    long: 9.9862,
    lat: 55.9563
  },
  {
    zip: 8740,
    city: "Brædstrup",
    long: 9.5924,
    lat: 55.9605
  },
  {
    zip: 8751,
    city: "Gedved",
    long: 9.862,
    lat: 55.9344
  },
  {
    zip: 8752,
    city: "Østbirk",
    long: 9.7574,
    lat: 55.9689
  },
  {
    zip: 8762,
    city: "Flemming",
    long: 9.6664,
    lat: 55.8944
  },
  {
    zip: 8763,
    city: "Rask Mølle",
    long: 9.6138,
    lat: 55.8784
  },
  {
    zip: 8765,
    city: "Klovborg",
    long: 9.4856,
    lat: 55.9246
  },
  {
    zip: 8766,
    city: "Nørre Snede",
    long: 9.415,
    lat: 55.9638
  },
  {
    zip: 8781,
    city: "Stenderup",
    long: 9.8023,
    lat: 55.7904
  },
  {
    zip: 8783,
    city: "Hornsyld",
    long: 9.8518,
    lat: 55.7623
  },
  {
    zip: 8789,
    city: "Endelave",
    long: 10.3082,
    lat: 55.7533
  },
  {
    zip: 8799,
    city: "Tunø",
    long: 10.4445,
    lat: 55.9486
  },
  {
    zip: 8800,
    city: "Viborg",
    long: 9.369,
    lat: 56.4168
  },
  {
    zip: 8830,
    city: "Tjele",
    long: 9.6021,
    lat: 56.4976
  },
  {
    zip: 8831,
    city: "Løgstrup",
    long: 9.3266,
    lat: 56.5176
  },
  {
    zip: 8832,
    city: "Skals",
    long: 9.3596,
    lat: 56.5907
  },
  {
    zip: 8840,
    city: "Rødkærsbro",
    long: 9.5044,
    lat: 56.3536
  },
  {
    zip: 8850,
    city: "Bjerringbro",
    long: 9.6426,
    lat: 56.3605
  },
  {
    zip: 8860,
    city: "Ulstrup",
    long: 9.7871,
    lat: 56.3801
  },
  {
    zip: 8870,
    city: "Langå",
    long: 9.9094,
    lat: 56.3806
  },
  {
    zip: 8881,
    city: "Thorsø",
    long: 9.7944,
    lat: 56.3103
  },
  {
    zip: 8882,
    city: "Fårvang",
    long: 9.7049,
    lat: 56.272
  },
  {
    zip: 8883,
    city: "Gjern",
    long: 9.7398,
    lat: 56.2222
  },
  {
    zip: 8900,
    city: "Randers C",
    long: 10.0332,
    lat: 56.464
  },
  {
    zip: 8920,
    city: "Randers NV",
    long: 9.8804,
    lat: 56.4805
  },
  {
    zip: 8930,
    city: "Randers NØ",
    long: 10.1724,
    lat: 56.5027
  },
  {
    zip: 8940,
    city: "Randers SV",
    long: 10.0123,
    lat: 56.4148
  },
  {
    zip: 8950,
    city: "Ørsted",
    long: 10.3288,
    lat: 56.5341
  },
  {
    zip: 8960,
    city: "Randers SØ",
    long: 10.1767,
    lat: 56.4291
  },
  {
    zip: 8961,
    city: "Allingåbro",
    long: 10.4904,
    lat: 56.4971
  },
  {
    zip: 8963,
    city: "Auning",
    long: 10.3842,
    lat: 56.4292
  },
  {
    zip: 8970,
    city: "Havndal",
    long: 10.2617,
    lat: 56.6518
  },
  {
    zip: 8981,
    city: "Spentrup",
    long: 10.0192,
    lat: 56.5408
  },
  {
    zip: 8983,
    city: "Gjerlev J",
    long: 10.1015,
    lat: 56.5823
  },
  {
    zip: 8990,
    city: "Fårup",
    long: 9.8454,
    lat: 56.5563
  },
  {
    zip: 9000,
    city: "Aalborg",
    long: 9.835,
    lat: 57.0517
  },
  {
    zip: 9200,
    city: "Aalborg SV",
    long: 9.8622,
    lat: 57.0093
  },
  {
    zip: 9210,
    city: "Aalborg SØ",
    long: 9.933,
    lat: 56.9992
  },
  {
    zip: 9220,
    city: "Aalborg Øst",
    long: 10.0095,
    lat: 57.0543
  },
  {
    zip: 9230,
    city: "Svenstrup J",
    long: 9.8682,
    lat: 56.9648
  },
  {
    zip: 9240,
    city: "Nibe",
    long: 9.5799,
    lat: 56.9488
  },
  {
    zip: 9260,
    city: "Gistrup",
    long: 10.0138,
    lat: 56.932
  },
  {
    zip: 9270,
    city: "Klarup",
    long: 10.0557,
    lat: 57.0195
  },
  {
    zip: 9280,
    city: "Storvorde",
    long: 10.2757,
    lat: 56.9168
  },
  {
    zip: 9293,
    city: "Kongerslev",
    long: 10.1136,
    lat: 56.8958
  },
  {
    zip: 9300,
    city: "Sæby",
    long: 10.5733,
    lat: 57.2844
  },
  {
    zip: 9310,
    city: "Vodskov",
    long: 10.0926,
    lat: 57.0954
  },
  {
    zip: 9320,
    city: "Hjallerup",
    long: 10.1379,
    lat: 57.1787
  },
  {
    zip: 9330,
    city: "Dronninglund",
    long: 10.3102,
    lat: 57.2113
  },
  {
    zip: 9340,
    city: "Asaa",
    long: 10.4441,
    lat: 57.1333
  },
  {
    zip: 9352,
    city: "Dybvad",
    long: 10.3233,
    lat: 57.285
  },
  {
    zip: 9362,
    city: "Gandrup",
    long: 10.1978,
    lat: 57.0536
  },
  {
    zip: 9370,
    city: "Hals",
    long: 10.6537,
    lat: 56.9638
  },
  {
    zip: 9380,
    city: "Vestbjerg",
    long: 9.9755,
    lat: 57.1273
  },
  {
    zip: 9381,
    city: "Sulsted",
    long: 9.9917,
    lat: 57.1627
  },
  {
    zip: 9382,
    city: "Tylstrup",
    long: 9.935,
    lat: 57.2031
  },
  {
    zip: 9400,
    city: "Nørresundby",
    long: 9.9281,
    lat: 57.0812
  },
  {
    zip: 9430,
    city: "Vadum",
    long: 9.8564,
    lat: 57.1154
  },
  {
    zip: 9440,
    city: "Aabybro",
    long: 9.7674,
    lat: 57.1628
  },
  {
    zip: 9460,
    city: "Brovst",
    long: 9.5354,
    lat: 57.1072
  },
  {
    zip: 9480,
    city: "Løkken",
    long: 9.6551,
    lat: 57.3823
  },
  {
    zip: 9490,
    city: "Pandrup",
    long: 9.6545,
    lat: 57.2032
  },
  {
    zip: 9492,
    city: "Blokhus",
    long: 9.5772,
    lat: 57.2574
  },
  {
    zip: 9493,
    city: "Saltum",
    long: 9.6961,
    lat: 57.266
  },
  {
    zip: 9500,
    city: "Hobro",
    long: 9.7737,
    lat: 56.6529
  },
  {
    zip: 9510,
    city: "Arden",
    long: 9.9426,
    lat: 56.7626
  },
  {
    zip: 9520,
    city: "Skørping",
    long: 9.927,
    lat: 56.8494
  },
  {
    zip: 9530,
    city: "Støvring",
    long: 9.8095,
    lat: 56.8927
  },
  {
    zip: 9541,
    city: "Suldrup",
    long: 9.6812,
    lat: 56.8429
  },
  {
    zip: 9550,
    city: "Mariager",
    long: 10.0221,
    lat: 56.6377
  },
  {
    zip: 9560,
    city: "Hadsund",
    long: 10.4165,
    lat: 56.7769
  },
  {
    zip: 9574,
    city: "Bælum",
    long: 10.1265,
    lat: 56.8298
  },
  {
    zip: 9575,
    city: "Terndrup",
    long: 10.0442,
    lat: 56.8145
  },
  {
    zip: 9600,
    city: "Aars",
    long: 9.4961,
    lat: 56.8
  },
  {
    zip: 9610,
    city: "Nørager",
    long: 9.6304,
    lat: 56.7479
  },
  {
    zip: 9620,
    city: "Aalestrup",
    long: 9.4967,
    lat: 56.693
  },
  {
    zip: 9631,
    city: "Gedsted",
    long: 9.3654,
    lat: 56.6909
  },
  {
    zip: 9632,
    city: "Møldrup",
    long: 9.5081,
    lat: 56.6089
  },
  {
    zip: 9640,
    city: "Farsø",
    long: 9.2775,
    lat: 56.7731
  },
  {
    zip: 9670,
    city: "Løgstør",
    long: 9.3095,
    lat: 56.9582
  },
  {
    zip: 9681,
    city: "Ranum",
    long: 9.1284,
    lat: 56.8986
  },
  {
    zip: 9690,
    city: "Fjerritslev",
    long: 9.2088,
    lat: 57.1274
  },
  {
    zip: 9700,
    city: "Brønderslev",
    long: 9.8828,
    lat: 57.2843
  },
  {
    zip: 9740,
    city: "Jerslev J",
    long: 10.1108,
    lat: 57.297
  },
  {
    zip: 9750,
    city: "Østervrå",
    long: 10.2708,
    lat: 57.3403
  },
  {
    zip: 9760,
    city: "Vrå",
    long: 9.8774,
    lat: 57.3719
  },
  {
    zip: 9800,
    city: "Hjørring",
    long: 9.2956,
    lat: 57.7023
  },
  {
    zip: 9830,
    city: "Tårs",
    long: 10.1432,
    lat: 57.3783
  },
  {
    zip: 9850,
    city: "Hirtshals",
    long: 9.715,
    lat: 57.9428
  },
  {
    zip: 9870,
    city: "Sindal",
    long: 10.2408,
    lat: 57.4675
  },
  {
    zip: 9881,
    city: "Bindslev",
    long: 10.2367,
    lat: 57.5714
  },
  {
    zip: 9900,
    city: "Frederikshavn",
    long: 10.725,
    lat: 57.5227
  },
  {
    zip: 9940,
    city: "Læsø",
    long: 11.1458,
    lat: 57.1889
  },
  {
    zip: 9970,
    city: "Strandby",
    long: 10.5292,
    lat: 57.5107
  },
  {
    zip: 9981,
    city: "Jerup",
    long: 10.4387,
    lat: 57.5355
  },
  {
    zip: 9982,
    city: "Ålbæk",
    long: 10.4047,
    lat: 57.6057
  },
  {
    zip: 9990,
    city: "Skagen",
    long: 10.4857,
    lat: 57.8554
  }
]
module.exports = ZIPS
