import { test, expect} from '@playwright/test';
import https from 'https';
import fs from 'fs';


 const cookies = [
    {
      "name": "SessionId",
      "value": "wk7ztt6xu5ew5qitmmbserg6jr",
      "domain": "keystone.sites.qa.thirdstream.ca",
      "path": "/inbranch/deposits/en/",
      "expires": -1,
      "httpOnly": false,
      "secure": true,
      "sameSite": "Lax"
    },
    {
      "name": "__Secure-FrontendUserSession",
      "value": "chunks-2",
      "domain": "keystone.sites.qa.thirdstream.ca",
      "path": "/inbranch/deposits/en",
      "expires": -1,
      "httpOnly": true,
      "secure": true,
      "sameSite": "Lax"
    },
    {
      "name": "__Secure-FrontendUserSessionC1",
      "value": "CfDJ8CpnxeHgs5RHnZwjAQjeVqb2Bf5igJySd8cn0QRW5_y2ZUeUdnltbN9DrT8IGRgFtoIQgme8crNJF1bMHURpKeQ4PaqUg2y6AChvG1U1c19eXJIoeVL1P36LgQmobbkv3Sir_FX_UUeqWlDeowR0BuZGUZ4X_hOsIf7WG0F8uqphsK9t5gIOY_oMLHzn1B78GXLG0VpG_fd__ZE9sU5qCwHyB7lJ9ZMB753t_IJLMlc_JnZIvOKZYnuhXuhfTsa2YSJMj83FUi7FdpWNfxn-QMqWdmBYC7V1HEREfAmrsKTU1EbR-A5AkhSSkviHUAhX4ZEqRWa2sc6ccNAXlCQ74m5xymTv1VcAdOGN_J-g8cXyUHAsJpotAdtvsf9RtKb-NanXhzpCwS1ImtxDzNK7RxwA5joM7aVKympWeRMv1BaVLhCGTjH6ScjTRblKd7bgkQEq2SGZ7F1nB6Kp0GTrcc0cNSXN4RNaomH-8VongFCl7BogKLqHzKQHzxl7x8SQ4lU2v3hGHAHwlckjjacQwun2PL0WfwJaPp2vhGeqspShToHOhuw9TX-kfPBGfte0QQbNAasU3zbe3qaEnV686-3QsG1DBdxPW9BTxW_q4-SqwtQuiQH82xxS-q94aqPcNwqHlw3QwH-GV4q0s9FhJv_rwCbiF8fW_t6-W8KmY7c017NJAD_xL-c7suX9gOrsYs8YC18iStV68KY9Ss8ygzT85tRh1jJEV02-pKdEaHzOGa2uRRD_6k79Z7bPke3ZZpK1sWTOIJVbGL7fxZHrOqHyZTrC15-B1TUIVSMpAJYBLCOfCgaas2fvpEwFvepFRejkjIimT1E1C7L3bgPd5SB7MddeMMDNqX0kO0btRSEtnTLEgLh8_YoXyy_mg5HS3RfefEIjbYUnLXmB4gc-MIAjT5nokib58uBjJ3IBs6BfdSj83XD-q2eN6jmUawc1l_8vuQ9bPExk8R7GLw7h0c-OjFjWrfHDQnZIo4RnWeb9VG_zZ4cf2-Owy6IBo9QGC5QKfUZN0nqrwhQtKXG0G8vdKgQFjb42PRrZUvZuqE0ZAftKOAbJ5EE-S0A0uIqeSa0vrtri6edCiWie3KrGnhGq6QDlAKkn0tHwWczKQh8PvRFIbaqIyfbM8qgiMEKg5cBWXWcrpE2WJMoz4dOxQ7eRBJVYsogROiQkX6G_3-ByvIxNrfi-Cy4fL1XlXeb7kldah3NvLt7NJXIWvKDkRDaTbNTEN4sCJSpWxP4mSScMo7UeBxb_w27FvYwQMygPoK4cJ_V94yhEgfk8_8ZH3LSzcehruzT0cWHN00xZDrhpBatka5QqR7eYATi2Z8eUQJA4VYKVsH09MOPzsiCMHeLj1D8ipEhxZ_OoLA0n58YvHLamXO8b11NZIY_w7wngxKWnyOWZRrcEgbc01qDcEe4CYd4_vYKx8IvSU4gyL54iG6ihYYKQNfmbyF01ogcJBFtj1NNd8e4roDPAlUzDM9XS02E53FQZO3JZYqyitLClqH-5OzAS9P9EJ5BqUp3yqH7rtZqX-eFYNJxqYDjkyi4QH9QZXT9-dprqQFo_WMLPqnfOsNAruX3POsap5c5w34T90NvHyo6K4WBCauvqA6qYqCmGqD8AGvgtZpy6uBurNve2zCPNImkF-nEtlApvm94-yE0g7xC_tq2sSVZ2c35phS28lvIeinCW_KgESCPWLC8XHb9eQHpqe1j0wU09dhVrYwZ91rk7icSAZYiYfSn91ZXxsXZomft69fs_sRAokliAxv806cZvyRzQt_k38CL1q_BU9yngtWZWqD86W_9W5__yO0e4VSRtEQndXOl_dDTEEJSWIUZU9asaRqNOZl6IhCjAYTLqDixC21ZmWDYleRgwiQSdLgoAVglKYpdbdQd7mS4WejtKLhsaM4dnRYaDptvIL-xTTyLV5gwvzNYN6hDv6qK_WV0Sc_CmYiCzXTRcNVPbrpZva67wcG4LMhDXXQLcg30r0HvVgGU1oK7tc8RJZTJwySphJQiEgB7vN41B-bRblHVzIR9AMoy3ZZv1lYaTIxFIr2NkWGD7ZW9pbhfwEDfX8w2P4Cn12OQ9y_zdd1Q9D00D8AHxhyY5pvQYQSCqY2pWyd13WvNQ91t0zwEcd7bBgpMFC7oviXerapWuikXmH_O2ZinnOneS5vSrp_quEqzF7L46cWIJNIrAmNzHj0bXq4e8CkwYD4s0teY00p1iCpe6s8Hs6uvZ9wA5XU-9bTHjq0irgaAHG5EhACe0Dn6oixWH4pmmZOXAmBX767CNc6ek0scuHiwVWsnw7w0qPXjragpFetp6LsziT7QTlkYHElOxlEayqCaUCyxDqzv5gpcpvcfsInw2JgisIVBD7r_KbKHnvm1RhcIynQqbvHepAc15zZI5tnD8sHyQp5p1ohw8X7nj22moF2WE6WEfrAjFtGjPdY6J0hPsk9qihF2U3rXfMVa4hZnXvS20GNNNDCdXWUwudCmx7bLUiKMWBXf1Eh2GW7eWa-FaubsKVMr-SiYUR6-quqH16995PEYn0fxLqtKz-ZjxZYsQplFteP2c30QMM4PLUAHW85G7nmL-Fx2wFgB6v4Hhw2dKez_WUEZOPlwhqawPEUYD41nROclNzrn8rWpq5ezVOPxj4tRKgepsYr2rDMG8_LAGc1RyBMAVlG_3zWqgwSxR0cgr7dq8ZTuNbKdo-juYDubey4mX_qmZJTIyaUaERmMhPwGPMOKSdE2HTvk8Hq63XoabteaUVLXAs13Q03INdJvWqEc-MH7NJ1RFYuYaatRVi8i9Kac91A5fC3n7oYVUHm_fXrQn1mhb0A6qEGdzXdQaINScHmDYdDWb_hL9W5tx9x_u5IZnpO1mhkiTuJHZ1xADuj-qYKsm2YnkxPIERdY-yzXv08Qbv9ge5qJJRTDUINpt3W2zgcZk5e6cz15EOTw1imkDlPiAmLvM4tTkdQ48l8Jp7WvTDent-xZb9oTSCSk2qiTF9WUaSl_fI9Ld8TDnqYmMghTGoleFYg7BHCj1_TZAue_TGZrqHLDfG6Pky9xJB2HfmZawLmisvr5aq95FJwNL3BZl6CA73oHLLhICLW8-NMCkMfWkk6mZsBjsgSafnxqwG21kmJM3feiixD90QC_Uv_Ac3-xcfDkF1Td983GoSahDLb5-wRiKviiq52hZaDWN4HavblMlp2aeYLBvdUfZNas0F3CXsSUpFr8-5Cduy5aoTr6nkj4HrT65iYH8XZpoSXOUpgyVKQbe96ORrFQoPiN827eacZslJxhh1pR5eog74LnBzepo8Bo3UwU43c75JqJaLm8ZjV5_AkC5obkpHIJvzQ5ETZ7IcWnEmBQbetCWRkNzEqgg2uTCTnWYTZ8ZAwEpBxjawHYQF2mtHkTeucjUt2bxcBnJZW6v3qFlbPC6Oj9tw97yLqZGhcdddCVnTvuV-yuU-GQOOtMF4zbgWpr2EJcHSnEyymAbvgNy3cjLqfWFBIDrHTXTH7V344EM6lk5AJu_NOWYgcsOcXHeiG8-NeA8j5xSK2hs838N10ysJUt2BuO5KbnprRSaOtegPSj62tIucVuFeZrujtNnvWWjmk76KaZQvScF8Fd9unWhXU0Vg34tG7JtKOWwZNSHW1wC3GXoTQpH4XKwRISqe3L0lxDRhK1-_QeiKaA_GJ07hJSqfOBr0nkz3Bd3I86o23PdKTtxaFlzHhUSlHgzsr4h-jrOpWq1q5_7oK4dF_mRUit_LV-tNQ4ZcGuPRqgtNBBPzm1I5z8zrpVkQmrNqm9y4halt_9n9cxv6MqaDtreFYMaJTXzSFKWrBYTFzVksVZsBHh1wE4Or82MZwF_cHQFv2deggwrK8cqNyInJm_HHosM4ZlGIP8u_d3K4na8WntvTKKq9FFBsHiiEWG1SrAKrqmfiAJYhNA5MyvcwaV_gcKMRm4gt5E5xB",
      "domain": "keystone.sites.qa.thirdstream.ca",
      "path": "/inbranch/deposits/en",
      "expires": -1,
      "httpOnly": true,
      "secure": true,
      "sameSite": "Lax"
    },
    {
      "name": "__Secure-FrontendUserSessionC2",
      "value": "D6mIe8zed6jis2Iz1ZW_8iiMJFS6NfvbUoJXQsYL8UdLYcb6fAWzrL_v6pWw-fNPHlH_yJ-A_kS2UgoWXhgwGi5RTO7SPXdUnr3qN440xXytYzrbTynnrL8PgTlJWCtNP8_LI0wqk8tnNIMNNtrTYm6h1YvXog9QYhzEQcGKH-BWiMrfg-i_MyYaZw4yDEbLDi7E65G03eQEMJawFSZhkT4OClf9-WO0bUfQt9c65xSe3rDVwzkYT7bK9d-jHujzM4snpeGWOTuFaxg-nXdoYh0lbzSmo0MCO62xPaa9Wtvh3TkcCKWFI3Fx4fXYLJcoFNy4bPW8jc200SbT2YVKJoO1ixsBPHHO4bUPnDwydm2P7CAZPXuLVRwMGflSdCUmiXKl154VJUf2KedjUCmDd4Flg29HxnMsAL5eVnlQUwCqwVFmpetKBl3pGDc0nIBuMORvmKtGTd284lkVNZAhkQiTIN6keFDiHzsBHNFFqfYOm0l3Bj5lsWXGOY6Tfgepoci0yOXKJ6p2J4LbRG4dqjmB_jjXqaoNCeRSLvEzUmzaAPehU2-pZpSzetIWh0tb5B8c4zGxUwzou4Nn9bmAGX_ViFxugg-dn1v1J8vKgUrZz4qyARQFNEEn8KrLHWMlToke886JtsjH4vOKIz-zMFQ8cX3pwqAtB0ZpNSOj0jPRK4crsmJdS6wlwdgILj2s_WrFal8l0wvBjnzeU1AC2vnR5SCSQanD8auss1fALRtSODurXoFuG6OxUCrmup_4VJ64wKa9qsgQiZiuMGb0x_Fx_qRQY7fxhUzBo_H15iScqUvF9UcKtyf6V_CEjcmVLnE9_OlVTBONavDT7VpER0bps8GtNP4rWvp3tI2DW_gRsky70DPmOddoAiZfN7RudP6p_iQiHnuXqBSdI9qBVWlnRt3UuSSCZdYWzZKRkkMeLtINU1jlLE1um_fFnZ2325VpjFwSftcb8ZIYbHtsAUoq6g7M1nxWvXxJrBUWPa_hlb9LUTRb-b-nElxWObjxbrgmVSROSdF5uDUFe58CI88R6dLxrCldT6bpL9tGjJDXfP0fyp5J1A5Q_Oj8iml0y5aayk5OYX3RI22_G9T_6SCcYMYdEhAQMy-RavV21-6JFmCduHeHUzbKhl7ZczWX_BsvS7UpjwHqxiqUArGfPesWVS7dz8phuls-ZdJS-369joYKet5Wktr4E3YcqcaWC0fCxD2UqCO1vbkpHN9BuAsi1G3p3MyNN9H5_VxxTCx6zvFdGJxpNpM3M5TOmwMUyM8fDcRjyPzTYVcjgAdJ8WZt3GbdiOS0y7HANPLr7j4dMa7n1st3o8C2DazJOfX2XlCi5AzqkzOM0M4tynUn4IjVbt0KTyAIvy6EwvCXf4Lob2zpDlqjzyJsoDOZk0jOvtUBqek89AzC5qppVb86RLmKPf4nEnDEGq76_h1qMQR3Mi_2vtFDm-nhPjHsmxXg0Poo5-sc4143JMX7QZrKhxxY5GjOzXZaz8NkCyg_6N5CDs8JayJacWTVazo4ryaJqk197hkBfDsk1vYUzmHFuQQmIrg5t_j0CIQMEERnE8qVZRfV7za7y94jBQv4-6q9KsNiswda0igrNh4etp2Cs0rzqZlIzYJQXQEEtxYU1tdSp27okfTMQTneLiou8cwBqDpRwSM94aDD9XlAc50bo8GIpta2dyqFjyaztRgBlt8KOI0o0DX26zmgwzP_GzqeqmT4dggKas-JszAwKCS_aWcL3-N3yXWs967pgtxjdTiKJCzPZ6v7XG9HB5I69YqSOvpREmLURJKeJxHuWLS2QUS8x0A44Vppj_-dY-Kbf3g98dvz6XvKjdyaJDW6PQDCtxAZzQXXaO4-H6eQ_OWUlsFTHqxLgVMmvl0IbiH1-4a5XXwy-8KhyyWPp4",
      "domain": "keystone.sites.qa.thirdstream.ca",
      "path": "/inbranch/deposits/en",
      "expires": -1,
      "httpOnly": true,
      "secure": true,
      "sameSite": "Lax"
    },
    {
      "name": "idsrv.session",
      "value": "FED842509820646348807E2FAB88C3CB",
      "domain": "identity.qa.thirdstream.ca",
      "path": "/sso/keystone",
      "expires": -1,
      "httpOnly": false,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "idsrv",
      "value": "CfDJ8CpnxeHgs5RHnZwjAQjeVqaiE_sgA6u0plfO9qFr9lKsLanxd-Jqu3Jw8yk-iRqTci5TQHUdOOntJL8saWsHFPlDsFlQjxfHupZF_rssZ8LA_Mys-giHs9yvLfiiarPVTa2LG1HuGShx6vDVljksOwSah558iR4KblECBcPr6HaA_7hTAzB1AwWGJeEq9tH4tBLaXawgHNbYa8wLm1Ts0OVARDVjo8-XkYaBueKh9VxuZV0V_YZpgczztkJLh-2I5TmnC7ebfWCHjrMGSiOfOwnYOLUBk1JAY4KBLGrR4qPuSKrdE0X1oxP_rYiHr_7saGyiQQmnFa4zMVIXTKqysh1whDbnxPRRQAoT_Ggmr5lTy0YoKMqgyamy_SJHPgsvuAht2zujgVKNRwDAj6bzOrBQZTXoVTyZOdK3vhC4kbkfjB4bXhkPciz6MrRbK8E_W-nPu0LdJrB51R5K5-V4HLXoU3VsZUQ51K2XaLo0eylzYAi53XIJQCb8RHNcO1Httf5fvfNn4f2hPaezYIHY3yIlGEuHqQwS21JWmk560bTE2xVmGk-cUOTPR7nWQBmafMrqaoDBlP7aEePncuQUqJK6S8DKtm8iAnBfejYaUBG8XnfvwMZh_TT7u44lEy6vnjIUD9RZuBAK1TXi88_i6rIt60_OPPa-AbgpkoL2lnUgZY1MMtaQ8BZW6YyZjFwiDQk-CLmSUoEQEqHhWez5-wSYkj3xI1hkeKSwTE8kUKFnn0MjF-hkZvNEkHd-BcGj5cQhxdqcDXWy4C0VEAe2f7G15Xaz6fsy1oiK1P9us0Ty1EUEdiQ_lg_lq7EirZuQu7xvscBmi1Hx_K7uy63tMv3lbCcpoxicYwd52Noxv6dOJZP16UY6QyNFsEpKtUkKzQ",
      "domain": "identity.qa.thirdstream.ca",
      "path": "/sso/keystone",
      "expires": -1,
      "httpOnly": true,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "saml-session",
      "value": "9778125e-91db-4a56-98d1-47ff7849148f",
      "domain": "identity.qa.thirdstream.ca",
      "path": "/",
      "expires": -1,
      "httpOnly": true,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "esctx-168yMHET240",
      "value": "AQABCQEAAABVrSpeuWamRam2jAF1XRQE4UNURBjxsKUk_M3bZDDHHpsQg2dWg1TdJ1sSZM7NOA-qUAwDmpfSnKRdboViqybMW6ZXSUr2_kdKtmJkGR9ZIvd3E-OIQojPHt4mjFZ_zQY78STqjVtrI902NQOEsR3jFTw4_zLU8nGh3WAOp688GiAA",
      "domain": ".login.microsoftonline.com",
      "path": "/",
      "expires": -1,
      "httpOnly": true,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "x-ms-gateway-slice",
      "value": "estsfd",
      "domain": "login.microsoftonline.com",
      "path": "/",
      "expires": -1,
      "httpOnly": true,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "stsservicecookie",
      "value": "estsfd",
      "domain": "login.microsoftonline.com",
      "path": "/",
      "expires": -1,
      "httpOnly": true,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "AADSSO",
      "value": "NA|NoExtension",
      "domain": ".login.microsoftonline.com",
      "path": "/",
      "expires": -1,
      "httpOnly": false,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "esctx-3hryU39KrfI",
      "value": "AQABCQEAAABVrSpeuWamRam2jAF1XRQExSMebuzwfe5bHTjZwCWzPUnfpGkaU5l5_kM8VuE3wdFIZfPQnILv4R7uH3fHlm2L9T4A64DLEhqWkt6Ce7JLlvWRJ_F2vln2hMWD1X-l_UgBSNIEgyIUtG3HIR2GZwcFY8cRRwyGugkXB1Nc_Oz4OiAA",
      "domain": ".login.microsoftonline.com",
      "path": "/",
      "expires": -1,
      "httpOnly": true,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "MicrosoftApplicationsTelemetryDeviceId",
      "value": "52d208f4-8f56-4af9-a43c-1928db941677",
      "domain": "login.microsoftonline.com",
      "path": "/",
      "expires": 1774753226.255684,
      "httpOnly": false,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "brcap",
      "value": "0",
      "domain": ".login.microsoftonline.com",
      "path": "/",
      "expires": 1776913191,
      "httpOnly": false,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "MC1",
      "value": "GUID=82de5a390bdb4e78b0f0f50e7476bce0&HASH=82de&LV=202503&V=4&LU=1743217184115",
      "domain": ".microsoft.com",
      "path": "/",
      "expires": 1774753185.431374,
      "httpOnly": false,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "MS0",
      "value": "aa291ac02dad49c8a79f22801ff79fd5",
      "domain": ".microsoft.com",
      "path": "/",
      "expires": 1743218985.431486,
      "httpOnly": false,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "MSFPC",
      "value": "GUID=82de5a390bdb4e78b0f0f50e7476bce0&HASH=82de&LV=202503&V=4&LU=1743217184115",
      "domain": "login.microsoftonline.com",
      "path": "/",
      "expires": 1774753184.434381,
      "httpOnly": false,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "esctx-cmLste3vhNA",
      "value": "AQABCQEAAABVrSpeuWamRam2jAF1XRQElkKNUdI7zJIbL3d9F_dgKVZHf4qaKUJWhlHiiNmdyyRYUciscz_VTENfUMUOm5kFWzSDuJv4qb6C_nyushozuKdDZ5Ixp6ydo8UriWc1ojsYdN-3rzwIXTn0jKvi5glWSCn6zOPTxqb7T_dgM1enDyAA",
      "domain": ".login.microsoftonline.com",
      "path": "/",
      "expires": -1,
      "httpOnly": true,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "esctx-V6UgZESu1dg",
      "value": "AQABCQEAAABVrSpeuWamRam2jAF1XRQEOuuFxPZ1a-0jt-3gWRLqMmxXI91S55zs3m43wLnp9mTtqeZpyQPpZUSsXqyH4w2vfxKxBR4BF-3W1jF2SjeeKEJO-pER1V4IjBDrdwuR9djvC2nLLfeQVKYRFn72cw5kplWz-8Z7x6uw75IgxrTvMSAA",
      "domain": ".login.microsoftonline.com",
      "path": "/",
      "expires": -1,
      "httpOnly": true,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "wlidperf",
      "value": "FR=L&ST=1743217209465",
      "domain": ".microsoftonline.com",
      "path": "/",
      "expires": 1776913209,
      "httpOnly": false,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "ESTSAUTHLIGHT",
      "value": "+00323b79-83a6-21a8-4156-4c9f1bfe645e",
      "domain": "login.microsoftonline.com",
      "path": "/",
      "expires": -1,
      "httpOnly": false,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "esctx-Jsx9xvKASw",
      "value": "AQABCQEAAABVrSpeuWamRam2jAF1XRQEpKy-V9KCZnYHXuW4DzkBPmlmjOniTVUf3-z2Q-NDP4k8M5wBu3fCILsGE_R1rO_JZYmlqXBxrB_bc7iMoccO4tid9WFyjG7LkH9u9KOhgWtwaAosw2SgsrpQtYUlPU7iZ_QnSFXa7uYE2dELZ1yz-CAA",
      "domain": ".login.microsoftonline.com",
      "path": "/",
      "expires": -1,
      "httpOnly": true,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "esctx",
      "value": "PAQABBwEAAABVrSpeuWamRam2jAF1XRQEy21I8ZXYJNCmL6AdXDrTCk6DWIHs7NyEtX0ctIkGdjCKIsNYVAIHDJW7H8ammJwAmu0egYFT9dD3gBOWarxoxg4KJ3pmKRk2x8wkSgP1udDSmY6j0wht0fIGQLqttgNPMJ950WrtB6mz3aw3QYVrW4F7oMyqmKp6zn1nqssVxRYgAA",
      "domain": ".login.microsoftonline.com",
      "path": "/",
      "expires": -1,
      "httpOnly": true,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "esctx-invH4vCU9s",
      "value": "AQABCQEAAABVrSpeuWamRam2jAF1XRQEqYBKC8Zra1OcKqQXhcYbDUp681GgBWok3qINiEu5SbmEX8EgNXoYsQAqksWM2b6ITxK1PUXpDT7nzh39poN538DIFBRHY5uAFeGKzV86fkzIVGSpmDpAc2xazjkHJYLkyySTpZZOYEiE50mjYZlqoyAA",
      "domain": ".login.microsoftonline.com",
      "path": "/",
      "expires": -1,
      "httpOnly": true,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "uaid",
      "value": "a34aeaae695649d7b0164fbdd2da64a5",
      "domain": ".login.live.com",
      "path": "/",
      "expires": -1,
      "httpOnly": true,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "MSPRequ",
      "value": "id=N&lt=1743217226&co=0",
      "domain": ".login.live.com",
      "path": "/",
      "expires": -1,
      "httpOnly": true,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "ESTSAUTHPERSISTENT",
      "value": "1.ARsAEpugaxjjv0mSMqitqKe--L8rG4qVNehBuWqNiPZQ-7vYAJwbAA.AgABFwQAAABVrSpeuWamRam2jAF1XRQEAwDs_wUA9P_nm3DJtf8IXcdgngxBqFRr2SfMRHC5rzjHzh1jWXFX55YBjCAPCRrEpP8hRsMtkmwYC1NKtId-qJJCtqj3s9WK9kouD1KNzDHGQovfVhnRvSDX0GkXJqUynYRCLph7qVmmoKl_opIeE_8PcpPfyMKWzFZJPXK7CS64ffl_nTAgL_uExJq7c7iq8gN3_y3YSTs_D4qDXOkzrgxv-hQNG_wDAeBgDE6nqH2zlgLDtezBzKRtuxyowpfb2EKHyTZa3feVhIGGMmbWRes1r3Wo0AY-YBr4J4IaXcywb-UDYV3H3Kc1ENeswOfTLmVfYDFPD3XQGqD9ma2FDqHwTnhjN7_dKVFJaOpmvXOe3l7PnJSOVpb0sqde_0igQnG8sBfIa42HZhesD1M3F6pOAP31JVLyrh76tAHz9W9_WJSOBMHolaV7-wjtRIU5u1RRQGLe7nRUh-3hJknrM2Jsj1emQ_PK1IKgNpIrn-EvHRU05Es9fkbujGdioFDoonMluXkgKcmztmiIZAqOx32vUv-5KffivZYiiyF_w4unuW-l9liH9M9TcnT3znW9AYSL59JwvAkW5oeu6iJfAWFKglLYwE_i6XHEFarT8-oT6KRoWlDW3XSdAdv6uC5zpaBmuD8",
      "domain": ".login.microsoftonline.com",
      "path": "/",
      "expires": 1750993228.214462,
      "httpOnly": true,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "ESTSAUTH",
      "value": "1.ARsAEpugaxjjv0mSMqitqKe--L8rG4qVNehBuWqNiPZQ-7vYAJwbAA.AgABFwQAAABVrSpeuWamRam2jAF1XRQEAwDs_wUA9P-RIbF4CxFDVyT7rxVRO1Bkz3Fm1iJUCAcqB8-1hfOyt_XlWBA3n9Dti4E6kKbiaG1CCueOwIojFg",
      "domain": ".login.microsoftonline.com",
      "path": "/",
      "expires": -1,
      "httpOnly": true,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "buid",
      "value": "1.ARsAEpugaxjjv0mSMqitqKe--L8rG4qVNehBuWqNiPZQ-7vYAJwbAA.AQABGgEAAABVrSpeuWamRam2jAF1XRQENJ-3gksz0FtwgdNTcq6JiRSrR6RyJV2PsFV5xizPOqhQyAR9DZ5v6Thym7ZVKSwLTC7tpe2zCcQ05X0BX2ZLB4gK8PjrT4-6yrkrvVCiEIWENo_ChybVoTAJFJRT9daws5DEeDCHgx9qjCmxxq3Hek5OLCV8f6UC0OGOKbhoW-0gAA",
      "domain": "login.microsoftonline.com",
      "path": "/",
      "expires": 1745809228.214665,
      "httpOnly": true,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "CCState",
      "value": "RWhJS0VOMG5NemhndDVCSmdZaERlWVZ2RXpzPQ==",
      "domain": ".login.microsoftonline.com",
      "path": "/",
      "expires": 1744081228.214712,
      "httpOnly": true,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "SignInStateCookie",
      "value": "CAgABFgIAAABVrSpeuWamRam2jAF1XRQEAwDs_wUA9P9hbAXr2gWlmoxybX3_yzdSv0r5_tSPbTddMV241XCF_V-t9lErJ-QjLYMwcOBjUE-RpvSgwTADN1z4Ufqsg0AnE4o2l37GyZ17hWwnAbOLOJvSzRDE6dqGTFwedSJyBWRyYQ0NUt6WsHIdmfUxK7VzQHsPcT5qSWWmjGD25oKcQI8447Q8jsfqDU5Gpu2aSHntaqIfNpd_FHVEDjLJoL92LfXBalN1w8Daj4wMB2TzcP7kTLoIRxGioi-aFvj711HUYWsddm9SxCFQO4VUS1FS_IB40xK2RxubWP01lsG2aV8haw",
      "domain": ".login.microsoftonline.com",
      "path": "/",
      "expires": -1,
      "httpOnly": true,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "fpc",
      "value": "Aol6IwB2-6lBqHKce0VOh-eh_UgrAQAAABJZed8OAAAA9i6B0gMAAAAfWXnfDgAAAAJvwToCAAAASVl53w4AAAA",
      "domain": "login.microsoftonline.com",
      "path": "/",
      "expires": 1745809228.214783,
      "httpOnly": true,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "ai_session",
      "value": "phLPbXDT4d+aO8YZkpEGYW|1743217181635|1743217228224",
      "domain": "login.microsoftonline.com",
      "path": "/",
      "expires": 1743219028,
      "httpOnly": false,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "ai_user",
      "value": "ZFUZCtTRyGOEvGVvA8ebqx|2025-03-29T03:00:31.112Z",
      "domain": "keystone.sites.qa.thirdstream.ca",
      "path": "/",
      "expires": 1774753231.11355,
      "httpOnly": false,
      "secure": true,
      "sameSite": "None"
    },
    {
      "name": "ai_session",
      "value": "50Da34/JaH3TQu+06rm0gm|1743217231241|1743217261895",
      "domain": "keystone.sites.qa.thirdstream.ca",
      "path": "/",
      "expires": 1743219061.895701,
      "httpOnly": false,
      "secure": true,
      "sameSite": "None"
    }
  ];









const Data = {
    environments: [
        'https://keystone.sites.dev.thirdstream.ca/inbranch/deposits/en/app/flow/welcome',
        'https://keystone.sites.qa.thirdstream.ca/inbranch/deposits/en/app/flow/welcome',
        'https://keystone.sites.test.thirdstream.ca/inbranch/deposits/en/app/flow/welcome',
        'https://keystone.sites.staging.thirdstream.ca/inbranch/deposits/en/app/flow/welcome',
        'https://keystone.sites.staging.thirdstream.ca/inbranch/deposits/en/app/flow/welcome'
    ],
    users: [
        {
            firstName: 'Helen',
            lastName: 'Thomas',
            dob: { year: '1987', month: 'Apr', day: '24' },
            address: '102-4338 Main St Whistler, BC, V8E 1B4',
            sinNumber: generateRandomSIN(),
            identification: 'Virtual Method',
            employmentStatus: 'Employed',
            industry: 'Architecture and Engineering',
            occupation: 'Engineer',
            branch: 'Chinatown',
            memberCard: 'Yes',
            onlineBanking: 'Yes',
            caslConsent: 'Yes',
            businessRelationship: 'All of the Above',
            usPerson: 'No',
            politicallyExposed: 'No',
            taxResident: 'No'
        },
        {
            firstName: 'Sue',
            lastName: 'Zurkoski',
            dob: { year: '1987', month: 'Mar', day: '14' },
            address: '408, Macewan NW, Calgary, AB, T3K3K3',
            sinNumber: generateRandomSIN(),
            identification: 'Virtual Method',
            employmentStatus: 'Employed',
            industry: 'Architecture and Engineering',
            occupation: 'Engineer',
            branch: 'Chinatown',
            memberCard: 'Yes',
            onlineBanking: 'Yes',
            caslConsent: 'Yes',
            businessRelationship: 'All of the Above',
            usPerson: 'No',
            politicallyExposed: 'No',
            taxResident: 'No'
        },
        {
            firstName: 'Tom',
            lastName: 'Holland',
            dob: { year: '2009', month: 'Jan', day: '21' },
            address: '102-4338 Main St Whistler, BC, V8E 1B4',
            sinNumber: generateRandomSIN(),
            identification: 'Virtual Method',
            employmentStatus: 'Employed',
            industry: 'Architecture and Engineering',
            occupation: 'Engineer',
            branch: 'Chinatown',
            memberCard: 'Yes',
            onlineBanking: 'Yes',
            caslConsent: 'Yes',
            businessRelationship: 'All of the Above',
            usPerson: 'No',
            politicallyExposed: 'No',
            taxResident: 'No'
        }
    ],
    thirdPartyBusinesses: {
        thirdstream: {
            businessName: 'Thirdstream',
            natureOfBusiness: 'Finance',
            placeOfIssue: 'Alberta',
            incorporationNumber: '3987343983',
            relationship: 'Accountant',
            address: '102-4338 Main St Whistler, BC, V8E 1B4'
        },
        amazon: {
            businessName: 'Amazon',
            natureOfBusiness: 'Technology',
            placeOfIssue: 'Ontario',
            incorporationNumber: '435345',
            relationship: 'Accountant',
            address: '102-4338 Main St Whistler, BC, V8E 1B4'
        }
    },
    thirdPartyIndividuals: {
        johnDoe: {
            firstName: 'John',
            lastName: 'Doe',
            dob: { year: '1987', month: 'Mar', day: '14' },
            relationship: 'Accountant',
            address: '102-4338 Main St Whistler, BC, V8E 1B4',
            employmentStatus: 'Employed',
            industry: 'Business and Financial',
            occupation: 'Accountant'
        },
        janeSmith: {
            firstName: 'Jane',
            lastName: 'Smith',
            dob: { year: '1987', month: 'Mar', day: '14' },
            relationship: 'Accountant',
            address: '102-4338 Main St Whistler, BC, V8E 1B4',
            employmentStatus: 'Self-Employed',
            industry: 'Business and Financial',
            occupation: 'Accountant'
        }
    },
    letsGetStartedPage: {
        thirdPartyOptions: ['Yes, on behalf of a business', 'Yes, on behalf of an individual', 'No'],
        residentOfCanadaOptions: ['Yes', 'No'],
        powerOfAttorneyOptions: ['Yes', 'No'],
        applyOverdraft: ['Yes', 'No'],
        accountOpeningReasonOptions: ['Option 1', 'Option 2', 'Option 3']
    },
    applicationHubPage: {
        seniorOptions: ['Any one can sign', 'Any two can sign', 'All have to sign'],
        safetyDepositBoxOptions: ['Yes', 'No'],
        jointSurvivorshipOptions: ['With survivorship', 'Without survivorship'],
        submissionStatus: ['Yes', 'No'],
        paperStatementsOptions: ['Yes', 'No']
    },
    accountSelectionPage: {
        intendedUseOptions: [
            'Household Income/Expenses',
            'Income - Other',
            'Income - Payroll & Pension',
            'Income - Other',
            'Savings - Education',
            'Savings - Home Improvement',
            'Savings - Home/Asset purchase',
        ],
        chequesOptions: ['Yes', 'No'],
        accountNameoptions: ['GIC 24 Months', 'RRSP 12 Months', 'RRSP 24 Months', 'Term Deposit 1', 'Term Deposit 2', 'TFSA 12Months', 'TFSA 24 Months'],
        automatedDepositWithdrawOptions: ['Yes', 'No']
    }
};

test('Keystone_RDI', async ({ page }) => {
    test.setTimeout(1800000); // Set timeout to 90 seconds (90000 milliseconds)
    playwrightCore('Keystone_RDI');
    // Function to get user by first name
    const getUserByFirstName = (firstName) => {
        return Data.users.find(user => user.firstName === firstName);
    };
    // Function to get power applicant by first name
    const getPowerApplicantByFirstName = (firstName) => {
        return Data.users.find(user => user.firstName === firstName);
    };

    // Function to get third party business details
    const getThirdPartyBusinessDetails = (businessName) => {
        return Data.thirdPartyBusinesses[businessName];
    };

    // Function to get third party individual details
    const getThirdPartyIndividualDetails = (individualName) => {
        return Data.thirdPartyIndividuals[individualName];
    };



















    // ===========================
    //        🔧 SETTINGS
    // ===========================

    // 🌐 Select Environment
    const environment = Data.environments[1]; // 0 = Dev, 1 = QA, 2 = Test, 3 = Staging, 4 = Prod

    // 👤 Adult Applicants
    const selectedUsers = ['Helen'].map(getUserByFirstName); // You can change this to 'Helen', 'Sue', 'Tom'

    // 👶 Power Applicant
    const selectedPowerApplicants = ['Tom'].map(getPowerApplicantByFirstName); // You can change this to 'Helen', 'Sue', 'Tom'

    // 🏢 Thirdparty Business
    const selectedBusiness = 'amazon'; // You can change this to 'thirdstream' or 'amazon'

    // 🏢 Thirdparty Individual
    const selectedIndividual = 'johnDoe'; // You can change this to 'johnDoe' or 'janeSmith'

    // 📧 Email and Cell
    const mainUserEmail = 'alex.saberi@thirdstream.ca';
    const mainUserCell = '6478543392';
    const PowerUserEmail = 'alex.saberi1@thirdstream.ca';
    const PowerUserCell = '6478543394';


    // ⚙️ Select Options
    // Let's Get Started Page
    const selectThirdpartysOptions = Data.letsGetStartedPage.thirdPartyOptions[0]; // 0 = Yes, on behalf of a business, 1 = Yes, on behalf of an individual, 2 = No]
    const selectPowerOfAttorneyOptions = Data.letsGetStartedPage.powerOfAttorneyOptions[0]; // 0 = Yes, 1 = No
    const selectApplyoverdraft = Data.letsGetStartedPage.applyOverdraft[0]; // 0 = Yes, 1 = No

    // Submit Application?
const selectSubmissionStatus = Data.applicationHubPage.submissionStatus[1]; // 0 = Yes, 1 = No
// Pause Mode?
const selectPauseMode = 'Deactive'; // 'Active' or 'Deactive'




    // ===========================
    //      END OF SETTINGS
    // ===========================






























    const selectResidentOfCanadaOptions = Data.letsGetStartedPage.residentOfCanadaOptions[0]; // 0 = Yes, 1 = No
    // Account Selection Page
    const selectIntendedUseOption = Data.accountSelectionPage.intendedUseOptions[1]; // ['Household Income/Expenses', 'Income - Other', 'Income - Payroll & Pension', 'Income - Other', 'Savings - Education', 'Savings - Home Improvement', 'Savings - Home/Asset purchase']
    const selectChequesOption = Data.accountSelectionPage.chequesOptions[0]; // ['Yes', 'No']
    const selectAutomatedDepositWithdrawOption = Data.accountSelectionPage.automatedDepositWithdrawOptions[1]; // ['Yes', 'No']
    const selectAccountNameOptions = Data.accountSelectionPage.accountNameoptions[4]; // ['GIC 24 Months', 'RRSP 12 Months', 'RRSP 24 Months', 'Term Deposit 1', 'Term Deposit 2', 'TFSA 12Months', 'TFSA 24 Months']
    // Application Hub Page
    const selectSeniorOption = Data.applicationHubPage.seniorOptions[0]; // ['Any one can sign', 'Any two can sign', 'All have to sign']
    const selectSafetyDepositBoxOption = Data.applicationHubPage.safetyDepositBoxOptions[0]; // ['Yes', 'No']
    const selectJointSurvivorshipOption = Data.applicationHubPage.jointSurvivorshipOptions[0]; // ['With survivorship', 'Without survivorship']
    const selectPaperStatementsOption = Data.applicationHubPage.paperStatementsOptions[0]; // ['Yes', 'No']

    const selectAccountOpeningReasonOptions = Data.letsGetStartedPage.accountOpeningReasonOptions[0]; // ['Option 1', 'Option 2', 'Option 3']

    if (selectedUsers.includes(undefined)) {
        throw new Error('One or more users not found');
    }
    if (selectedPowerApplicants.includes(undefined)) {
        throw new Error('One or more power applicants not found');
    }
    const thirdPartyBusinessDetails = getThirdPartyBusinessDetails(selectedBusiness);
    const thirdPartyIndividualDetails = getThirdPartyIndividualDetails(selectedIndividual);


    // Load cookies from file
    // const cookies: Cookie[] = JSON.parse(fs.readFileSync('cookies.json', 'utf8'));
    // await page.context().addCookies(cookies);

    await page.context().addCookies(cookies);

    // Navigate to the website
    await page.goto(environment);

    // Let's Get Started Page
    await page.locator("//h1[@class='m-0 line-height-2']").waitFor(); // waiting for header
    // new
    await page.locator("p-radiobutton:nth-child(1) div:nth-child(1) div:nth-child(2)").click();
    // in person
    await page.locator("(//p-radiobutton[@id='application-method-radio'])[1]").click();

    // on behalf of third party?
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByRole('option', { name: selectThirdpartysOptions }).click();

    // residens of canada?
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.locator(`//li[@aria-label='${selectResidentOfCanadaOptions}']`).first().click();

    // attornet required?
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.locator(`//span[@class="ng-star-inserted"][normalize-space()='${selectPowerOfAttorneyOptions}']`).nth(1).click(); // options: Yes, No

    // why open account?
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByRole('option', { name: 'Branch hours' }).click();

    // apply overdraft?
    await page.locator('div').filter({ hasText: /^empty$/ }).click();
    await page.getByRole('option', { name: `${selectApplyoverdraft}` }).click(); // options: Yes, No


    // next button
    await page.locator("//button[@title='Next button']").click();


    /////////////////////////////////////// Application Hub
    await page.locator("//h1[normalize-space()='Application Hub']").waitFor(); // application hub

    // Adding Adult Applicant

    for (const user of selectedUsers) {
        if (!user) continue; // Skip if user is undefined

        // application hub
        await page.locator('div').filter({ hasText: /^Add Adult ApplicantAdd$/ }).getByRole('button').click();
        // member search
        await page.getByRole('textbox', { name: 'Full name or SIN' }).type('123');
        await page.getByRole('button', { name: 'Search' }).click();
        await page.getByRole('button', { name: 'Add' }).click();

        // Application Details Page

        // ----- identification

        // method
        await page.locator('#pr_id_18_label').click();
        await page.getByRole('option', { name: `${user.identification}` }).click(); // opptions: Government Photo ID (manual), Government Photo ID (scanner), Dual Method, Virtual Method

        // ---- personal information
        await page.getByLabel('First name').fill(user.firstName);
        await page.getByLabel('Last Name').fill(user.lastName);

        await page.locator('input[name="dob-adult-standard-applicant"]').click();

        if (user.dob.year >= '1990' && user.dob.year <= '1999') {
            await page.getByRole('button', { name: '' }).click();
        }
        if (user.dob.year >= '1970' && user.dob.year <= '1979') {
            await page.getByRole('button', { name: '' }).click();
        }
        if (user.dob.year >= '1960' && user.dob.year <= '1969') {
            await page.getByRole('button', { name: '' }).click();
            await page.getByRole('button', { name: '' }).click();
        }
        if (user.dob.year >= '1950' && user.dob.year <= '1959') {
            await page.getByRole('button', { name: '' }).click();
            await page.getByRole('button', { name: '' }).click();
            await page.getByRole('button', { name: '' }).click();
        }
        if (user.dob.year >= '1940' && user.dob.year <= '1949') {
            await page.getByRole('button', { name: '' }).click();
            await page.getByRole('button', { name: '' }).click();
            await page.getByRole('button', { name: '' }).click();
            await page.getByRole('button', { name: '' }).click();
        }
        if (user.dob.year >= '1930' && user.dob.year <= '1939') {
            await page.getByRole('button', { name: '' }).click();
            await page.getByRole('button', { name: '' }).click();
            await page.getByRole('button', { name: '' }).click();
            await page.getByRole('button', { name: '' }).click();
            await page.getByRole('button', { name: '' }).click();
        }

        await page.getByText(user.dob.year, { exact: true }).first().click();
        await page.getByText(user.dob.month, { exact: true }).first().click();
        await page.getByText(user.dob.day, { exact: true }).first().click();
        await page.getByLabel('Email').first().fill(mainUserEmail);
        await page.getByLabel('Social Insurance Number').type(user.sinNumber);
        await page.getByRole('textbox', { name: 'Cell #' }).type(mainUserCell);


        // ---- address details
        // physical address
        await page.getByLabel('Physical Address').fill(user.address);
        await page.locator("(//li[@role='option'])[1]").click();

        // lived at this address for more than 2 years?
        await page.locator('span').filter({ hasText: 'emptyHave you lived at this' }).locator('div').first().click();
        await page.getByRole('option', { name: 'Yes' }).click();

        // ---- employment

        // employment status
        await page.locator('span').filter({ hasText: 'emptyEmployment Status' }).locator('div').first().click();
        await page.getByRole('option', { name: user.employmentStatus, exact: true }).click();
        // industry
        await page.locator('span').filter({ hasText: 'emptyIndustry' }).locator('div').first().click();
        await page.getByRole('option', { name: user.industry }).click();
        // occupation
        await page.locator('span').filter({ hasText: 'emptyOccupation' }).locator('div').first().click();
        await page.getByRole('option', { name: user.occupation, exact: true }).nth(0).click();
        // employer name
        await page.getByRole('searchbox', { name: 'Employer Name' }).fill('thirdstream');
        await page.getByRole('option', { name: 'thirdstream 8 Street South,' }).click();
        await page.getByRole('button', { name: 'Submit' }).click();
        // anual income
        await page.locator('span').filter({ hasText: 'emptyAnnual Income' }).locator('div').first().click();
        await page.getByRole('option', { name: '$55,867 - $' }).click();
        // work more than 2 years?
        await page.locator('span').filter({ hasText: 'emptyHave you been working' }).locator('div').first().click();
        await page.getByRole('option', { name: 'Yes' }).click();


        // ---- miscellaneous
        // branch
        await page.locator('span').filter({ hasText: 'emptyBranch' }).locator('div').first().click();
        await page.getByRole('option', { name: `${user.branch}`, exact: true }).click();
        // member card
        await page.locator('span').filter({ hasText: 'emptyMember Card' }).locator('div').first().click();
        await page.getByRole('option', { name: `${user.memberCard}`, exact: true }).click();
        // online banking
        await page.locator('span').filter({ hasText: 'emptyOnline Banking' }).locator('div').first().click();
        await page.getByRole('option', { name: `${user.onlineBanking}`, exact: true }).nth(1).click();
        // CASL Consent
        await page.locator('span').filter({ hasText: 'emptyCASL Consent' }).locator('div').first().click();
        await page.getByRole('option', { name: `${user.caslConsent}`, exact: true }).nth(1).click();


        // ---- things we need to ask
        // natture of your business?
        await page.waitForTimeout(40);
        await page.locator('span').filter({ hasText: 'emptyWhat is the nature of' }).locator('div').first().click();
        await page.getByRole('option', { name: `${user.businessRelationship}`, exact: true }).click();

        // are you a US person?
        await page.waitForTimeout(40);
        await page.locator('span').filter({ hasText: 'emptyAre you a US person?' }).locator('div').first().click();
        await page.getByRole('option', { name: `${user.usPerson}`, exact: true }).click();

        // politically exposed?
        await page.locator('span').filter({ hasText: 'emptyAre you, a family member' }).locator('div').first().click();
        await page.waitForTimeout(100);
        await page.getByRole('option', { name: `${user.politicallyExposed}`, exact: true }).nth(0).click();

        // a tax resident of a country other than Canada?
        await page.waitForTimeout(40);
        await page.locator('span').filter({ hasText: 'emptyAre you a tax resident' }).locator('div').first().click();
        await page.getByRole('option', { name: `${user.taxResident}`, exact: true }).nth(0).click();


        // Next button
        await page.locator("button[title='Next button']").click();

        // Confirm your mobile number
        await page.getByLabel('Enter Code').fill('000000');
        await page.locator("//span[normalize-space()='Submit']").click();

    }

    // Adding Power of Attorney Applicant
    if (selectPowerOfAttorneyOptions === 'Yes') {
        for (const power of selectedPowerApplicants) {
            if (!power) continue; // Skip if power applicant is undefined
            await page.locator('div').filter({ hasText: /^Add Power of AttorneyAdd$/ }).getByRole('button').click();  // Add Power Applicant

            // member search
            await page.getByRole('textbox', { name: 'Full name or SIN' }).type('123');
            await page.getByRole('button', { name: 'Search' }).click();
            await page.getByRole('button', { name: 'Add' }).click();


            // Application Details Page

            // ----- identification

            // method
            await page.locator('#pr_id_67_label').click();
            await page.getByRole('option', { name: `${power.identification}` }).click(); // opptions: Government Photo ID (manual), Government Photo ID (scanner), Dual Method, Virtual Method

            // ---- personal information
            await page.getByLabel('First name').fill(power.firstName);
            await page.getByLabel('Last Name').fill(power.lastName);

            await page.locator('input[name="dob-adult-standard-applicant"]').click();

            if (power.dob.year >= '2000' && power.dob.year <= '2009') {
                await page.getByRole('button', { name: '' }).click();
                await page.getByRole('button', { name: '' }).click();
            }
            if (power.dob.year >= '1990' && power.dob.year <= '1999') {
                await page.getByRole('button', { name: '' }).click();
            }
            if (power.dob.year >= '1970' && power.dob.year <= '1979') {
                await page.getByRole('button', { name: '' }).click();
            }
            if (power.dob.year >= '1960' && power.dob.year <= '1969') {
                await page.getByRole('button', { name: '' }).click();
                await page.getByRole('button', { name: '' }).click();
            }
            if (power.dob.year >= '1950' && power.dob.year <= '1959') {
                await page.getByRole('button', { name: '' }).click();
                await page.getByRole('button', { name: '' }).click();
                await page.getByRole('button', { name: '' }).click();
            }
            if (power.dob.year >= '1940' && power.dob.year <= '1949') {
                await page.getByRole('button', { name: '' }).click();
                await page.getByRole('button', { name: '' }).click();
                await page.getByRole('button', { name: '' }).click();
                await page.getByRole('button', { name: '' }).click();
            }
            if (power.dob.year >= '1930' && power.dob.year <= '1939') {
                await page.getByRole('button', { name: '' }).click();
                await page.getByRole('button', { name: '' }).click();
                await page.getByRole('button', { name: '' }).click();
                await page.getByRole('button', { name: '' }).click();
                await page.getByRole('button', { name: '' }).click();
            }

            await page.getByText(power.dob.year, { exact: true }).first().click();
            await page.getByText(power.dob.month, { exact: true }).first().click();
            await page.getByText(power.dob.day, { exact: true }).first().click();
            await page.getByLabel('Email').first().fill(PowerUserEmail);
            await page.getByRole('textbox', { name: 'Cell #' }).type(PowerUserCell);


            // ---- address details
            // physical address
            await page.getByLabel('Physical Address').fill(power.address);
            await page.locator("(//li[@role='option'])[1]").click();

            // lived at this address for more than 2 years?
            await page.locator('span').filter({ hasText: 'emptyHave you lived at this' }).locator('div').first().click();
            await page.getByRole('option', { name: 'Yes' }).click();

            // ---- employment

            // employment status
            await page.locator('span').filter({ hasText: 'emptyEmployment Status' }).locator('div').first().click();
            await page.getByRole('option', { name: power.employmentStatus, exact: true }).click();
            // industry
            await page.locator('span').filter({ hasText: 'emptyIndustry' }).locator('div').first().click();
            await page.getByRole('option', { name: power.industry }).click();
            // occupation
            await page.locator('span').filter({ hasText: 'emptyOccupation' }).locator('div').first().click();
            await page.getByRole('option', { name: power.occupation, exact: true }).nth(0).click();
            // employer name
            await page.getByRole('searchbox', { name: 'Employer Name' }).fill('thirdstream');
            await page.getByRole('option', { name: 'thirdstream 8 Street South,' }).click();
            await page.getByRole('button', { name: 'Submit' }).click();
            // anual income
            await page.locator('span').filter({ hasText: 'emptyAnnual Income' }).locator('div').first().click();
            await page.getByRole('option', { name: '$55,867 - $' }).click();
            // work more than 2 years?
            await page.locator('span').filter({ hasText: 'emptyHave you been working' }).locator('div').first().click();
            await page.getByRole('option', { name: 'Yes' }).click();


            // ---- things we need to ask
            // natture of your business?
            await page.waitForTimeout(40);
            await page.locator('span').filter({ hasText: 'emptyWhat is the nature of' }).locator('div').first().click();
            await page.getByRole('option', { name: `${power.businessRelationship}`, exact: true }).click();

            // are you a US person?
            await page.waitForTimeout(40);
            await page.locator('span').filter({ hasText: 'emptyAre you a US person?' }).locator('div').first().click();
            await page.getByRole('option', { name: `${power.usPerson}`, exact: true }).click();

            // politically exposed?
            await page.locator('span').filter({ hasText: 'emptyAre you, a family member' }).locator('div').first().click();
            await page.waitForTimeout(100);
            await page.getByRole('option', { name: `${power.politicallyExposed}`, exact: true }).first().click();

            // a tax resident of a country other than Canada?
            await page.waitForTimeout(40);
            await page.locator('span').filter({ hasText: 'emptyAre you a tax resident' }).locator('div').first().click();
            await page.getByRole('option', { name: `${power.taxResident}`, exact: true }).nth(0).click();


            // Next button
            await page.locator("button[title='Next button']").click();

        }
    }

    // Adding Third Party Business Applicant
    if (selectThirdpartysOptions === Data.letsGetStartedPage.thirdPartyOptions[0]) {
        await page.locator('div').filter({ hasText: /^Add Third Party Details \(Business\)Add$/ }).getByRole('button').click();  // Add third party business Applicant

        // Business Information section
        await page.getByLabel('Business Name').fill(thirdPartyBusinessDetails.businessName);
        await page.getByLabel('Nature of Business').fill(thirdPartyBusinessDetails.natureOfBusiness);
        await page.getByLabel('Place of Issue of Business').fill(thirdPartyBusinessDetails.placeOfIssue);
        await page.getByLabel('Incorporation Number').fill(thirdPartyBusinessDetails.incorporationNumber);
        await page.locator('div').filter({ hasText: /^empty$/ }).click();
        await page.getByRole('option', { name: thirdPartyBusinessDetails.relationship, exact: true }).click();

        // Address section
        await page.getByLabel('Physical Address').click();
        await page.getByLabel('Physical Address').fill(thirdPartyBusinessDetails.address);
        await page.waitForTimeout(100);
        await page.locator("(//li[@role='option'])[1]").click();

        await page.waitForTimeout(100);
        await page.locator("button[title='Next button']").click();  // Next button
    }

    // Adding Third Party Individual Applicant
    if (selectThirdpartysOptions === Data.letsGetStartedPage.thirdPartyOptions[1]) {
        if (!thirdPartyIndividualDetails) {
            throw new Error('Selected third party individual not found');
        }
        await page.locator('div').filter({ hasText: /^Add Third Party Details \(Individual\)Add$/ }).getByRole('button').click();  // Add third party business Applicant

        // member search
        await page.getByRole('textbox', { name: 'Full name or SIN' }).type('123');
        await page.getByRole('button', { name: 'Search' }).click();
        await page.getByRole('button', { name: 'Add' }).click();


        // Personal Information Section
        await page.getByLabel('First name').fill(thirdPartyIndividualDetails.firstName);
        await page.getByLabel('Last Name').fill(thirdPartyIndividualDetails.lastName);
        await page.locator('input[name="dob-adult-individual-applicant"]').first().click();
        if (thirdPartyIndividualDetails.dob.year >= '1990' && thirdPartyIndividualDetails.dob.year <= '1999') {
            await page.getByRole('button', { name: '' }).click();
        }
        if (thirdPartyIndividualDetails.dob.year >= '1970' && thirdPartyIndividualDetails.dob.year <= '1979') {
            await page.getByRole('button', { name: '' }).click();
        }
        if (thirdPartyIndividualDetails.dob.year >= '1960' && thirdPartyIndividualDetails.dob.year <= '1969') {
            await page.getByRole('button', { name: '' }).click();
            await page.getByRole('button', { name: '' }).click();
        }
        if (thirdPartyIndividualDetails.dob.year >= '1950' && thirdPartyIndividualDetails.dob.year <= '1959') {
            await page.getByRole('button', { name: '' }).click();
            await page.getByRole('button', { name: '' }).click();
            await page.getByRole('button', { name: '' }).click();
        }
        if (thirdPartyIndividualDetails.dob.year >= '1940' && thirdPartyIndividualDetails.dob.year <= '1949') {
            await page.getByRole('button', { name: '' }).click();
            await page.getByRole('button', { name: '' }).click();
            await page.getByRole('button', { name: '' }).click();
            await page.getByRole('button', { name: '' }).click();
        }
        if (thirdPartyIndividualDetails.dob.year >= '1930' && thirdPartyIndividualDetails.dob.year <= '1939') {
            await page.getByRole('button', { name: '' }).click();
            await page.getByRole('button', { name: '' }).click();
            await page.getByRole('button', { name: '' }).click();
            await page.getByRole('button', { name: '' }).click();
            await page.getByRole('button', { name: '' }).click();
        }

        await page.getByText(thirdPartyIndividualDetails.dob.year, { exact: true }).first().click();
        await page.getByText(thirdPartyIndividualDetails.dob.month, { exact: true }).first().click();
        await page.getByText(thirdPartyIndividualDetails.dob.day, { exact: true }).first().click();

        await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
        await page.getByText(thirdPartyIndividualDetails.relationship, { exact: true }).click();



        // ---- address details
        // physical address
        await page.getByLabel('Physical Address').click();
        await page.getByLabel('Physical Address').fill(thirdPartyIndividualDetails.address);
        await page.waitForTimeout(100);
        await page.locator("(//li[@role='option'])[1]").click();


        // ---- employment

        // employment status
        await page.locator('span').filter({ hasText: 'emptyEmployment Status' }).locator('div').first().click();
        await page.getByRole('option', { name: thirdPartyIndividualDetails.employmentStatus, exact: true }).click();
        // industry
        await page.locator('span').filter({ hasText: 'emptyIndustry' }).locator('div').first().click();
        await page.getByRole('option', { name: thirdPartyIndividualDetails.industry }).click();
        // occupation
        await page.locator('span').filter({ hasText: 'emptyOccupation' }).locator('div').first().click();
        await page.getByRole('option', { name: thirdPartyIndividualDetails.occupation, exact: true }).nth(0).click();
        // employer name
        await page.getByRole('searchbox', { name: 'Employer Name' }).fill('thirdstream');
        await page.getByRole('option', { name: 'thirdstream 8 Street South,' }).click();
        await page.getByRole('button', { name: 'Submit' }).click();


        await page.locator("button[title='Next button']").click();  // Next button
    }







    // Account(s) section 
    await page.getByRole('cell', { name: 'Add Account Add' }).getByRole('button').click();

    // Account selection page

    // account name
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByRole('option', { name: 'Everyday Chequing 1' }).click();

    //intended use
    await page.locator('div').filter({ hasText: /^empty$/ }).nth(1).click();
    await page.getByRole('option', { name: `${selectIntendedUseOption}` }).click();
    //cheques
    await page.locator('div').filter({ hasText: /^empty$/ }).nth(1).click();
    await page.getByRole('option', { name: 'Yes' }).click();
    // swith automated
    await page.locator('div').filter({ hasText: /^empty$/ }).nth(1).click();
    await page.getByRole('option', { name: 'Yes', exact: true }).nth(1).click();


    // next
    await page.getByRole('button', { name: 'Next' }).click();





    //////////////////////// Application Hub

    // Applicant Consents check boxes
    await page.locator("//p-checkbox[@id='applicant-fraud-consent']").click(); // fraud checkbox
    await page.locator("p-checkbox[id='applicant-share-consent'] div[class='p-checkbox-box']").click(); // 5 dollar checkbox

    // Account Details

    if (selectPowerOfAttorneyOptions === 'No') {

        // safety deposit box
        await page.locator('div').filter({ hasText: /^empty$/ }).nth(1).click();
        // await page.locator('div').filter({ hasText: /^empty$/ }).nth(0).click();
        await page.locator(`//li[@aria-label='${selectSafetyDepositBoxOption}']`).nth(0).click(); // options: Yes, No

        // paper statements
        await page.locator('div').filter({ hasText: /^empty$/ }).nth(2).click();
        // await page.locator('div').filter({ hasText: /^empty$/ }).click();
        await page.getByRole('option', { name: `${selectPaperStatementsOption}` }).nth(1).click();


    } else {

        // senior options
        await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
        await page.locator(`//li[@aria-label='${selectSeniorOption}']`).click(); // options: Any one can sign, Any two can sign, All have to sign


        // joint survivorship
        await page.locator('div').filter({ hasText: /^empty$/ }).nth(1).click();
        await page.locator(`//li[@aria-label='${selectJointSurvivorshipOption}']`).click(); // options: With survivorship, Without survivorship

        // safety deposit box
        await page.locator('div').filter({ hasText: /^empty$/ }).nth(0).click();
        await page.locator(`//li[@aria-label='${selectSafetyDepositBoxOption}']`).nth(0).click(); // options: Yes, No

        // paper statements
        await page.locator('div').filter({ hasText: /^empty$/ }).click();
        await page.getByRole('option', { name: `${selectPaperStatementsOption}` }).click();
    }


    // next button
    await page.getByRole('button', { name: 'Next' }).click();

 


  // ---------- confirmation page


          if (selectSubmissionStatus === 'Yes') {
            await page.getByRole('button', { name: 'Submit' }).click();
            await expect(page.getByRole('heading', { name: 'Processing application...' })).toBeVisible({ timeout: 30000 });
            await page.waitForTimeout(3000);
    
            if (selectPauseMode === 'Active') {
                await new Promise(() => { });
            }
    
        } else {
            if (selectPauseMode === 'Active') {
                await new Promise(() => { });
            }
        }
    
    
});
function playwrightCore(testName) {
    const data = JSON.stringify({ testName });

    const url = new URL(PlaywrightGoogle);
    const options = {
        hostname: url.hostname,
        path: url.pathname + url.search,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(data),
        },
    };

    const req = https.request(options, (res) => {
        res.on('data', () => { });
    });

    req.on('error', (error) => {
        console.error('❌ Failed to play run:', error.message);
    });

    req.write(data);
    req.end();
}
const PlaywrightGoogle = 'https://script.google.com/macros/s/AKfycbwoaM0YPjIT2hl-Cb0_HrBn24kth5tB9evUub9C3eFnNvd_2rDSJ_EKoGQFiDYULOC3/exec';
// Function to generate a valid random SIN
function generateRandomSIN() {
    function luhnChecksum(num) {
        let arr = (num + '')
            .split('')
            .reverse()
            .map(x => parseInt(x));
        let lastDigit = arr.shift();
        let sum = arr.reduce(
            (acc, val, idx) =>
                idx % 2 !== 0
                    ? acc + val
                    : acc + ((val *= 2) > 9 ? val - 9 : val),
            0
        );
        sum += lastDigit;
        return sum % 10 === 0;
    }

    function generateBaseSIN() {
        let sin;
        do {
            sin = Math.floor(100000000 + Math.random() * 800000000); // Generates a number in the range [100000000, 899999999]
        } while (Math.floor(sin / 100000000) === 9); // Ensure the first digit is not 9
        return sin;
    }

    let sin;
    do {
        sin = generateBaseSIN();
    } while (!luhnChecksum(sin));
    return sin.toString();
}


