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
const menuArr = [
	{
		text: "Pengiriman Airport Bagasi",
		image: bagasi,
		url: 'bagasi/page-bagasi'
	},
	{
		text: "Pengiriman Dokumen",
		image: bagasi,
		url: 'document/page-pengiriman-dokumen'
	},
	{
		text: 'Pengambilan dan Go Oleh-Oleh',
		image: bagasi,
		url: 'bagasi/page-bagasi'
	}
]

let image_width = 456;
let image_height = 135;

let view_width = 192;
let view_height = 50;

let new_image_height = image_height * view_width / image_width;
export default function Home() {
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
				<Grid container spacing={0}>
					<div className={styles.parent_scroll}>
						<div className={styles.div_title}>
							<span className={styles.apa_yang_ingin_kamu_kirim}>Apa yang ingin kamu kirim?</span>
						</div>
						<div className={styles.scrolls}>
							{
								menuArr.map((x, y) => {
									return <div key={y} className={styles.home_menu_card}>
										<Link href={x.url}>
											<div className={styles.child_menu_card}>
												<div className={styles.icon_menu_card}>
													<div>
														<Image
															src={x.image}
															alt="Picture of the author"
															width={40}
															height={40}
														/>
													</div>
												</div>
												<div className={styles.parent_text_menu_card}>
													<span className={styles.text_menu_card}>{x.text}</span>
												</div>
											</div>
										</Link>
									</div>
								})
							}

						</div>
					</div>
				</Grid>
				<Grid container spacing={0}>
					<div className={styles.div_riwayat_layanan}>
						<div className={styles.div_riwayat_layanan_left}>
							<Image
								src={riwayat}
								alt="Picture of the author"
								width={52}
								height={52}
							/>
						</div>
						<div className={styles.div_riwayat_layanan_right}>
							<span className={styles.text_riwayat_layananmu}>Riwayat Layananmu</span>
							<span className={styles.text_desc_riwayat_layananmu}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
						</div>
					</div>
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
