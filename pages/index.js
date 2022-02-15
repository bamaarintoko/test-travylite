import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Grid, Input, Stack, TextField } from '@mui/material'
import InputUnstyled from '@mui/base/InputUnstyled';
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputBase from '@mui/material/InputBase';
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'
import riwayat from '../public/riwayat.png'
import SearchIcon from '@mui/icons-material/Search';
import plane from "../public/plane.png"
import bagasi from "../public/bagasi.png"
import { Box } from '@mui/system';
import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SummarizeTwoToneIcon from '@mui/icons-material/SummarizeTwoTone';
import SummarizeIcon from '@mui/icons-material/Summarize';
import Inventory2TwoToneIcon from '@mui/icons-material/Inventory2TwoTone';
import Inventory2Icon from '@mui/icons-material/Inventory2';
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
		url: 'bagasi/page-bagasi'
	}
]

let image_width = 456;
let image_height = 135;

let view_width = 192;
let view_height = 50;

let new_image_height = image_height * view_width / image_width;
export default function Home() {
	const route = useRouter()
	return (
		<Container maxWidth="md" style={{ paddingLeft: 0, paddingRight: 0 }}>
			<Grid container spacing={0}>
				<Grid item md={12} xs={12} style={{ height: 304, background: "linear-gradient(to bottom, #20aee0 50%, #0065af)" }}>
					{/* <Item>xs=6 md=8</Item> */}
					<Stack spacing={3} sx={{ display: 'flex', padding: '16px' }}>
						<Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '43px' }}>

							<div style={{ width: view_width, height: new_image_height }}>
								<Image
									src={logo}
									alt="Picture of the author"
								/>
							</div>
						</Box>

						<div className={styles.center_header_home}>
							<span className={styles.text_posisi_paket}>Cek posisi paketmu!</span>
						</div>
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
				</Grid>
				<Grid container sx={{ paddingLeft: '16px', paddingRight: '16px' }}>
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
				</Grid>
				<Grid container spacing={0} sx={{ padding: '16px' }}>
					<Box sx={{ background: "linear-gradient(135deg, #20AEE0 0%, #0065AF 100%)", borderRadius: "16px", display: 'flex', flex: 1 }}>
						<Stack direction="row" spacing={0} sx={{ display: 'flex', flex: 1, paddingTop: '30px', paddingBottom: '30px', paddingLeft: '24px' }}>
							<Box sx={{ width: '52px', height: '52px'}}>
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
				</Grid>
				<Grid container spacing={0} style={{ padding: 16, flexDirection: 'column' }}>
					{
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
					}

				</Grid>
			</Grid>
		</Container>
	)
}
