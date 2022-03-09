import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Container, Grid, Input, Stack, TextField } from '@mui/material'

import InputBase from '@mui/material/InputBase';
import Image from 'next/image'
import logo from '../public/logo.png'
import riwayat from '../public/riwayat.png'
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

import SummarizeIcon from '@mui/icons-material/Summarize';

import Inventory2Icon from '@mui/icons-material/Inventory2';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HelpIcon from '@mui/icons-material/Help';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { general_style } from '../component/general_style';
import { useRouter } from 'next/router';
const menuArr = [
	{
		text: "Pengiriman Airport Bagasi",
		image: <BusinessCenterIcon fontSize="large" sx={{ color: "#FCCF2F" }} />,
		url: 'bagasi/page-bagasi'
	},
	{
		text: "Pengiriman Dokumen",
		image: <SummarizeIcon fontSize="large" sx={{ color: "#FCCF2F" }} />,
		url: 'document/page-pengiriman-dokumen'
	},
	{
		text: 'Pengambilan dan Go Oleh-Oleh',
		image: <Inventory2Icon fontSize="large" sx={{ color: "#FCCF2F" }} />,
		url: 'souvenir/page-souvenir'
	}
]

let image_width = 456;
let image_height = 135;

let view_width = 192;
let view_height = 50;

let new_image_height = image_height * view_width / image_width;
export default function Home() {
	const route = useRouter()
	const { authReducer } = useSelector((state) => state)
	const dispatch = useDispatch()
	useEffect(() => {
		console.log("authReducer", authReducer)
		dispatch({
			type: "TEST"
		})
	}, [])
	return (
		<Container maxWidth="md" style={{ paddingLeft: 0, paddingRight: 0 }}>
			<Grid container spacing={0}>
				<Stack sx={{ display: 'flex', flex: 1 }}>
					<Box style={{ display: 'flex', height: 304, background: "linear-gradient(to bottom, #20aee0 50%, #0065af)" }}>
						{/* <Item>xs=6 md=8</Item> */}
						<Stack spacing={3} sx={{ display: 'flex', padding: '16px', flex: 1 }}>
							<Box sx={{ position: 'relative', top: 0 }}>
								{
									authReducer.access_token != null
										?
										<Box sx={{ position: 'absolute', right: 0 }}>
											<AccountCircleTwoToneIcon onClick={()=>route.push("/user/page-user")} fontSize="large" sx={{ color: '#FFF' }} />
										</Box>
										:
										<Box onClick={() => route.push("/auth/page-login")} sx={{ position: 'absolute', right: 0 }}>

											<LoginIcon fontSize="large" sx={{ color: '#FFF' }} />
										</Box>
								}
							</Box>
							<Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '43px' }}>

								<div style={{ width: view_width, height: new_image_height }}>
									<Image
										src={logo}
										alt="Picture of the author"
									/>
								</div>
							</Box>
							<Box sx={{ display: 'flex', justifyContent: 'center' }}>
								<span style={general_style.title_white_bold}>Cek posisi paketmu!</span>
							</Box>
							<Box sx={{ display: "flex", height: 48, backgroundColor: "#FFF", borderRadius: '16px' }}>
								<InputBase size="small"
									fullWidth
									placeholder="Masukkan nomer AWB kamu"
									sx={{ borderRadius: '16px', height: 48, paddingLeft: '16px' }}
									id="input-with-sx" />
								<Box onClick={() => alert("a")} sx={{ display: 'flex', height: 48, width: 48, borderTopRightRadius: 16, borderBottomRightRadius: 16 }}>
									<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', width: 48, height: 48, borderWidth: 3, borderStyle: 'solid', borderColor: "#FFF", borderTopRightRadius: 16, borderBottomRightRadius: 16, backgroundColor: "#0065af" }}>

										<SearchIcon sx={{ color: "#FFF", mr: 0, my: 0 }} />
									</Box>
								</Box>
							</Box>
						</Stack>
					</Box>
					<Box sx={{ paddingLeft: '16px', paddingRight: '16px' }}>
						<Stack spacing={2} sx={{ display: 'flex', flex: 1 }}>
							<Box sx={{ marginTop: '24px' }}>

								<span style={general_style.title_dark_bold}>Apa yang ingin kamu kirim?</span>
							</Box>
							<Stack direction="row" spacing={2} sx={{ display: 'flex', }}>
								{
									menuArr.map((x, y) => {
										return (
											<Box key={y} onClick={() => route.push(x.url)} sx={{ display: 'flex', flex: 1, height: 146, boxShadow: "0px 16px 24px #F2F2F2", borderRadius: "16px", backgroundColor: "#FFF" }}>
												<Stack sx={{ display: 'flex', flex: 1 }}>
													<Box sx={{ display: 'flex', height: 90, justifyContent: 'center', alignItems: 'center' }}>

														<Box sx={{ display: 'flex', borderRadius: 100, justifyContent: 'center', alignItems: 'center', height: 60, width: 60, background: "linear-gradient(135deg, #20AEE0 0%, #0065AF 100%)" }}>

															{x.image}
														</Box>
													</Box>
													<Box sx={{ flex: 1, display: 'flex', alignItems: 'center', paddingLeft: '11px', paddingRight: '11px', justifyContent: 'center' }}>
														<span style={{
															fontFamily: 'Roboto',
															fontStyle: 'normal',
															fontWeight: 'normal',
															fontSize: 11.2,
															lineHeight: '160%',
															color: "#323232",
															textAlign: 'center'
														}}>{x.text}</span>
													</Box>
												</Stack>
											</Box>
										)
									})
								}
							</Stack>
						</Stack>
					</Box>
					<Box sx={{ padding: '16px' }}>
						<Box onClick={() => route.push("/riwayat/page-riwayat-pesanan")} sx={{ background: "linear-gradient(135deg, #20AEE0 0%, #0065AF 100%)", borderRadius: "16px", display: 'flex', flex: 1 }}>
							<Stack direction="row" spacing={0} sx={{ display: 'flex', flex: 1, paddingTop: '30px', paddingBottom: '30px', paddingLeft: '24px' }}>
								<Box sx={{ width: '52px', height: '52px' }}>
									<Image
										src={riwayat}
										alt="Picture of the author"
										width={52}
										height={52}
									/>
								</Box>
								<Box sx={{ marginLeft: '24px' }}>
									<Stack>
										<span style={general_style.heading_white_bold}>Riwayat Layananmu</span>
										<span style={general_style.body_white}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
									</Stack>
								</Box>
							</Stack>
						</Box>
					</Box>
					<Box sx={{ paddingLeft: '16px', paddingRight: '16px', flexDirection: 'column' }}>
						{
							menuArr.map((x, y) => {
								return (
									<Stack sx={{ paddingBottom: '16px' }} key={y}>
										<Stack direction={"row"}>
											<Box sx={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
												<Stack sx={{ display: 'flex', alignItems: 'center' }}>
													<span style={general_style.heading_dark_bold}>YGY</span>
													<span style={general_style.body_light}>12 OKT 2021</span>
												</Stack>
											</Box>
											<Box sx={{ display: 'flex', flex: 2, justifyContent: 'center', alignItems: 'center' }}>
												<Stack direction={"row"} sx={{ display: 'flex', flex: 1 }}>
													<Box sx={{ display: 'flex', flex: 1, alignItems: 'center' }}>
														<Box sx={{ height: '1px', display: 'flex', flex: 1, borderTopWidth: 1, borderTopStyle: 'dashed', borderTopColor: 'rgba(0, 0, 0, 0.2)' }} />
													</Box>
													<Box sx={{ paddingLeft: '8px', paddingRight: '8px' }}>
														<FlightTakeoffIcon fontSize="large" sx={{ color: "#0065AF" }} />
													</Box>
													<Box sx={{ display: 'flex', flex: 1, alignItems: 'center' }}>
														<Box sx={{ height: '1px', display: 'flex', flex: 1, borderTopWidth: 1, borderTopStyle: 'dashed', borderTopColor: 'rgba(0, 0, 0, 0.2)' }} />
													</Box>
												</Stack>
											</Box>
											<Box sx={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
												<Stack sx={{ display: 'flex', alignItems: 'center' }}>
													<span style={general_style.heading_dark_bold}>JKT</span>
													<span style={general_style.body_light}>15 OKT 2021</span>
												</Stack>
											</Box>
										</Stack>
										<Stack direction={"row"}>
											<Box sx={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
												<Stack direction="row" sx={{ alignItems: 'center' }}>
													<Box sx={{ height: '24px', width: '24px' }}>
														<BusinessCenterIcon fontSize="small" sx={{ color: "#FF9901" }} />
													</Box>
													<span style={general_style.body_light}>Pengiriman Airport Bagasi</span>
												</Stack>
											</Box>
											<Box sx={{ display: 'flex', flex: 2, justifyContent: 'center', alignItems: 'center' }}>
												<HelpIcon sx={{ color: "rgba(0, 0, 0, 0.4)", fontSize: 13 }} />
												<span style={general_style.body_light}>Detail</span>
											</Box>
											<Box sx={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
												<span style={{
													fontFamily: 'Roboto',
													fontStyle: 'normal',
													fontWeight: 500,
													fontSize: 14,
													lineHeight: '160%',
													color: "#0065AF"
												}}>Rp 35,000</span>
											</Box>
										</Stack>
									</Stack>
								)
							})
						}


						{/* {
							menuArr.map((x, y) => {
								return <div key={y} className={styles.parent_list_history}>
									<div className={styles.child_list_history}>
										<span className={styles.txt_location}>YGY</span>
										<span className={styles.txt_location_date}>12 OKT 2021</span>
										<div className={styles.left_list}>
											<div>
												<Image
													alt="Picture of the author"
													src={bagasi}
													width={29.3}
													height={24}
												/>
											</div>
											<span className={styles.text_layanan_desc}>Pengiriman Airport Bagasi</span>
										</div>
									</div>
									<div className={styles.child_list_plane}>
										<div className={styles.separator_container}>

											<div className={styles.separator_line}></div>
											<Image
												src={plane}
												alt="Picture of the author"
												width={40}
												height={40}
											/>
											<div className={styles.separator_line}></div>
										</div>
										<div style={{ height: 50 }}>

											<span className={styles.text_detail_desc}>Detail</span>
										</div>
									</div>
									<div className={styles.child_list_history}>
										<span className={styles.txt_location}>JKT</span>
										<span className={styles.txt_location_date}>15 OKT 2021</span>
										<div className={styles.left_list}>
											<span className={styles.text_price_desc}>Rp 35,000</span>
										</div>
									</div>
								</div>
							})
						} */}

					</Box>
				</Stack>
			</Grid>
		</Container>
	)
}
