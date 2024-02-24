const timeZoneData = [
  {
    value: -12,
    label: "Etc/GMT+12"
  },
  {
    value: -11,
    label: "Etc/GMT+11"
  },
  {
    value: -11,
    label: "Pacific/Midway"
  },
  {
    value: -11,
    label: "Pacific/Niue"
  },
  {
    value: -11,
    label: "Pacific/Pago_Pago"
  },
  {
    value: -10,
    label: "Etc/GMT+10"
  },
  {
    value: -10,
    label: "Pacific/Honolulu"
  },
  {
    value: -10,
    label: "Pacific/Johnston"
  },
  {
    value: -10,
    label: "Pacific/Rarotonga"
  },
  {
    value: -10,
    label: "Pacific/Tahiti"
  },
  {
    value: -8,
    label: "America/Anchorage"
  },
  {
    value: -8,
    label: "America/Juneau"
  },
  {
    value: -8,
    label: "America/Nome"
  },
  {
    value: -8,
    label: "America/Sitka"
  },
  {
    value: -8,
    label: "America/Yakutat"
  },
  {
    value: -7,
    label: "America/Santa_Isabel"
  },
  {
    value: -7,
    label: "America/Los_Angeles"
  },
  {
    value: -7,
    label: "America/Tijuana"
  },
  {
    value: -7,
    label: "America/Vancouver"
  },
  {
    value: -8,
    label: "America/Los_Angeles"
  },
  {
    value: -8,
    label: "America/Tijuana"
  },
  {
    value: -8,
    label: "America/Vancouver"
  },
  {
    value: -8,
    label: "PST8PDT"
  },
  {
    value: -7,
    label: "America/Creston"
  },
  {
    value: -7,
    label: "America/Dawson"
  },
  {
    value: -7,
    label: "America/Dawson_Creek"
  },
  {
    value: -7,
    label: "America/Hermosillo"
  },
  {
    value: -7,
    label: "America/Phoenix"
  },
  {
    value: -7,
    label: "America/Whitehorse"
  },
  {
    value: -7,
    label: "Etc/GMT+7"
  },
  {
    value: -6,
    label: "America/Chihuahua"
  },
  {
    value: -6,
    label: "America/Mazatlan"
  },
  {
    value: -6,
    label: "America/Boise"
  },
  {
    value: -6,
    label: "America/Cambridge_Bay"
  },
  {
    value: -6,
    label: "America/Denver"
  },
  {
    value: -6,
    label: "America/Edmonton"
  },
  {
    value: -6,
    label: "America/Inuvik"
  },
  {
    value: -6,
    label: "America/Ojinaga"
  },
  {
    value: -6,
    label: "America/Yellowknife"
  },
  {
    value: -6,
    label: "MST7MDT"
  },
  {
    value: -6,
    label: "America/Belize"
  },
  {
    value: -6,
    label: "America/Costa_Rica"
  },
  {
    value: -6,
    label: "America/El_Salvador"
  },
  {
    value: -6,
    label: "America/Guatemala"
  },
  {
    value: -6,
    label: "America/Managua"
  },
  {
    value: -6,
    label: "America/Tegucigalpa"
  },
  {
    value: -6,
    label: "Etc/GMT+6"
  },
  {
    value: -6,
    label: "Pacific/Galapagos"
  },
  {
    value: -5,
    label: "America/Chicago"
  },
  {
    value: -5,
    label: "America/Indiana/Knox"
  },
  {
    value: -5,
    label: "America/Indiana/Tell_City"
  },
  {
    value: -5,
    label: "America/Matamoros"
  },
  {
    value: -5,
    label: "America/Menominee"
  },
  {
    value: -5,
    label: "America/North_Dakota/Beulah"
  },
  {
    value: -5,
    label: "America/North_Dakota/Center"
  },
  {
    value: -5,
    label: "America/North_Dakota/New_Salem"
  },
  {
    value: -5,
    label: "America/Rainy_River"
  },
  {
    value: -5,
    label: "America/Rankin_Inlet"
  },
  {
    value: -5,
    label: "America/Resolute"
  },
  {
    value: -5,
    label: "America/Winnipeg"
  },
  {
    value: -5,
    label: "CST6CDT"
  },
  {
    value: -5,
    label: "America/Bahia_Banderas"
  },
  {
    value: -5,
    label: "America/Cancun"
  },
  {
    value: -5,
    label: "America/Merida"
  },
  {
    value: -5,
    label: "America/Mexico_City"
  },
  {
    value: -5,
    label: "America/Monterrey"
  },
  {
    value: -6,
    label: "America/Regina"
  },
  {
    value: -6,
    label: "America/Swift_Current"
  },
  {
    value: -5,
    label: "America/Bogota"
  },
  {
    value: -5,
    label: "America/Cayman"
  },
  {
    value: -5,
    label: "America/Coral_Harbour"
  },
  {
    value: -5,
    label: "America/Eirunepe"
  },
  {
    value: -5,
    label: "America/Guayaquil"
  },
  {
    value: -5,
    label: "America/Jamaica"
  },
  {
    value: -5,
    label: "America/Lima"
  },
  {
    value: -5,
    label: "America/Panama"
  },
  {
    value: -5,
    label: "America/Rio_Branco"
  },
  {
    value: -5,
    label: "Etc/GMT+5"
  },
  {
    value: -5,
    label: "America/Detroit"
  },
  {
    value: -5,
    label: "America/Havana"
  },
  {
    value: -5,
    label: "America/Indiana/Petersburg"
  },
  {
    value: -5,
    label: "America/Indiana/Vincennes"
  },
  {
    value: -5,
    label: "America/Indiana/Winamac"
  },
  {
    value: -5,
    label: "America/Iqaluit"
  },
  {
    value: -5,
    label: "America/Kentucky/Monticello"
  },
  {
    value: -5,
    label: "America/Louisville"
  },
  {
    value: -5,
    label: "America/Montreal"
  },
  {
    value: -5,
    label: "America/Nassau"
  },
  {
    value: -5,
    label: "America/New_York"
  },
  {
    value: -5,
    label: "America/Nipigon"
  },
  {
    value: -5,
    label: "America/Pangnirtung"
  },
  {
    value: -5,
    label: "America/Port-au-Prince"
  },
  {
    value: -5,
    label: "America/Thunder_Bay"
  },
  {
    value: -5,
    label: "America/Toronto"
  },
  {
    value: -4,
    label: "America/Detroit"
  },
  {
    value: -4,
    label: "America/Havana"
  },
  {
    value: -4,
    label: "America/Indiana/Petersburg"
  },
  {
    value: -4,
    label: "America/Indiana/Vincennes"
  },
  {
    value: -4,
    label: "America/Indiana/Winamac"
  },
  {
    value: -4,
    label: "America/Iqaluit"
  },
  {
    value: -4,
    label: "America/Kentucky/Monticello"
  },
  {
    value: -4,
    label: "America/Louisville"
  },
  {
    value: -4,
    label: "America/Montreal"
  },
  {
    value: -4,
    label: "America/Nassau"
  },
  {
    value: -4,
    label: "America/New_York"
  },
  {
    value: -4,
    label: "America/Nipigon"
  },
  {
    value: -4,
    label: "America/Pangnirtung"
  },
  {
    value: -4,
    label: "America/Port-au-Prince"
  },
  {
    value: -4,
    label: "America/Thunder_Bay"
  },
  {
    value: -4,
    label: "America/Toronto"
  },
  {
    value: -5,
    label: "America/Indiana/Marengo"
  },
  {
    value: -5,
    label: "America/Indiana/Vevay"
  },
  {
    value: -5,
    label: "America/Indianapolis"
  },
  {
    value: -4.5,
    label: "America/Caracas"
  },
  {
    value: -4,
    label: "America/Asuncion"
  },
  {
    value: -3,
    label: "America/Glace_Bay"
  },
  {
    value: -3,
    label: "America/Goose_Bay"
  },
  {
    value: -3,
    label: "America/Halifax"
  },
  {
    value: -3,
    label: "America/Moncton"
  },
  {
    value: -3,
    label: "America/Thule"
  },
  {
    value: -3,
    label: "Atlantic/Bermuda"
  },
  {
    value: -4,
    label: "America/Campo_Grande"
  },
  {
    value: -4,
    label: "America/Cuiaba"
  },
  {
    value: -4,
    label: "America/Anguilla"
  },
  {
    value: -4,
    label: "America/Antigua"
  },
  {
    value: -4,
    label: "America/Aruba"
  },
  {
    value: -4,
    label: "America/Barbados"
  },
  {
    value: -4,
    label: "America/Blanc-Sablon"
  },
  {
    value: -4,
    label: "America/Boa_Vista"
  },
  {
    value: -4,
    label: "America/Curacao"
  },
  {
    value: -4,
    label: "America/Dominica"
  },
  {
    value: -4,
    label: "America/Grand_Turk"
  },
  {
    value: -4,
    label: "America/Grenada"
  },
  {
    value: -4,
    label: "America/Guadeloupe"
  },
  {
    value: -4,
    label: "America/Guyana"
  },
  {
    value: -4,
    label: "America/Kralendijk"
  },
  {
    value: -4,
    label: "America/La_Paz"
  },
  {
    value: -4,
    label: "America/Lower_Princes"
  },
  {
    value: -4,
    label: "America/Manaus"
  },
  {
    value: -4,
    label: "America/Marigot"
  },
  {
    value: -4,
    label: "America/Martinique"
  },
  {
    value: -4,
    label: "America/Montserrat"
  },
  {
    value: -4,
    label: "America/Port_of_Spain"
  },
  {
    value: -4,
    label: "America/Porto_Velho"
  },
  {
    value: -4,
    label: "America/Puerto_Rico"
  },
  {
    value: -4,
    label: "America/Santo_Domingo"
  },
  {
    value: -4,
    label: "America/St_Barthelemy"
  },
  {
    value: -4,
    label: "America/St_Kitts"
  },
  {
    value: -4,
    label: "America/St_Lucia"
  },
  {
    value: -4,
    label: "America/St_Thomas"
  },
  {
    value: -4,
    label: "America/St_Vincent"
  },
  {
    value: -4,
    label: "America/Tortola"
  },
  {
    value: -4,
    label: "Etc/GMT+4"
  },
  {
    value: -4,
    label: "America/Santiago"
  },
  {
    value: -4,
    label: "Antarctica/Palmer"
  },
  {
    value: -2.5,
    label: "America/St_Johns"
  },
  {
    value: -3,
    label: "America/Sao_Paulo"
  },
  {
    value: -3,
    label: "America/Argentina/Buenos_Aires"
  },
  {
    value: -3,
    label: "America/Argentina/Catamarca"
  },
  {
    value: -3,
    label: "America/Argentina/Cordoba"
  },
  {
    value: -3,
    label: "America/Argentina/Jujuy"
  },
  {
    value: -3,
    label: "America/Argentina/La_Rioja"
  },
  {
    value: -3,
    label: "America/Argentina/Mendoza"
  },
  {
    value: -3,
    label: "America/Argentina/Rio_Gallegos"
  },
  {
    value: -3,
    label: "America/Argentina/Salta"
  },
  {
    value: -3,
    label: "America/Argentina/San_Juan"
  },
  {
    value: -3,
    label: "America/Argentina/San_Luis"
  },
  {
    value: -3,
    label: "America/Argentina/Tucuman"
  },
  {
    value: -3,
    label: "America/Argentina/Ushuaia"
  },
  {
    value: -3,
    label: "America/Buenos_Aires"
  },
  {
    value: -3,
    label: "America/Catamarca"
  },
  {
    value: -3,
    label: "America/Cordoba"
  },
  {
    value: -3,
    label: "America/Jujuy"
  },
  {
    value: -3,
    label: "America/Mendoza"
  },
  {
    value: -3,
    label: "America/Araguaina"
  },
  {
    value: -3,
    label: "America/Belem"
  },
  {
    value: -3,
    label: "America/Cayenne"
  },
  {
    value: -3,
    label: "America/Fortaleza"
  },
  {
    value: -3,
    label: "America/Maceio"
  },
  {
    value: -3,
    label: "America/Paramaribo"
  },
  {
    value: -3,
    label: "America/Recife"
  },
  {
    value: -3,
    label: "America/Santarem"
  },
  {
    value: -3,
    label: "Antarctica/Rothera"
  },
  {
    value: -3,
    label: "Atlantic/Stanley"
  },
  {
    value: -3,
    label: "Etc/GMT+3"
  },
  {
    value: -3,
    label: "America/Godthab"
  },
  {
    value: -3,
    label: "America/Montevideo"
  },
  {
    value: -3,
    label: "America/Bahia"
  },
  {
    value: -2,
    label: "America/Noronha"
  },
  {
    value: -2,
    label: "Atlantic/South_Georgia"
  },
  {
    value: -2,
    label: "Etc/GMT+2"
  },
  {
    value: 0,
    label: "America/Scoresbysund"
  },
  {
    value: 0,
    label: "Atlantic/Azores"
  },
  {
    value: -1,
    label: "Atlantic/Cape_Verde"
  },
  {
    value: -1,
    label: "Etc/GMT+1"
  },
  {
    value: 1,
    label: "Africa/Casablanca"
  },
  {
    value: 1,
    label: "Africa/El_Aaiun"
  },
  {
    value: 0,
    label: "America/Danmarkshavn"
  },
  {
    value: 0,
    label: "Etc/GMT"
  },
  {
    value: 0,
    label: "Europe/Isle_of_Man"
  },
  {
    value: 0,
    label: "Europe/Guernsey"
  },
  {
    value: 0,
    label: "Europe/Jersey"
  },
  {
    value: 0,
    label: "Europe/London"
  },
  {
    value: 1,
    label: "Europe/Isle_of_Man"
  },
  {
    value: 1,
    label: "Europe/Guernsey"
  },
  {
    value: 1,
    label: "Europe/Jersey"
  },
  {
    value: 1,
    label: "Europe/London"
  },
  {
    value: 1,
    label: "Atlantic/Canary"
  },
  {
    value: 1,
    label: "Atlantic/Faeroe"
  },
  {
    value: 1,
    label: "Atlantic/Madeira"
  },
  {
    value: 1,
    label: "Europe/Dublin"
  },
  {
    value: 1,
    label: "Europe/Lisbon"
  },
  {
    value: 0,
    label: "Africa/Abidjan"
  },
  {
    value: 0,
    label: "Africa/Accra"
  },
  {
    value: 0,
    label: "Africa/Bamako"
  },
  {
    value: 0,
    label: "Africa/Banjul"
  },
  {
    value: 0,
    label: "Africa/Bissau"
  },
  {
    value: 0,
    label: "Africa/Conakry"
  },
  {
    value: 0,
    label: "Africa/Dakar"
  },
  {
    value: 0,
    label: "Africa/Freetown"
  },
  {
    value: 0,
    label: "Africa/Lome"
  },
  {
    value: 0,
    label: "Africa/Monrovia"
  },
  {
    value: 0,
    label: "Africa/Nouakchott"
  },
  {
    value: 0,
    label: "Africa/Ouagadougou"
  },
  {
    value: 0,
    label: "Africa/Sao_Tome"
  },
  {
    value: 0,
    label: "Atlantic/Reykjavik"
  },
  {
    value: 0,
    label: "Atlantic/St_Helena"
  },
  {
    value: 2,
    label: "Arctic/Longyearbyen"
  },
  {
    value: 2,
    label: "Europe/Amsterdam"
  },
  {
    value: 2,
    label: "Europe/Andorra"
  },
  {
    value: 2,
    label: "Europe/Berlin"
  },
  {
    value: 2,
    label: "Europe/Busingen"
  },
  {
    value: 2,
    label: "Europe/Gibraltar"
  },
  {
    value: 2,
    label: "Europe/Luxembourg"
  },
  {
    value: 2,
    label: "Europe/Malta"
  },
  {
    value: 2,
    label: "Europe/Monaco"
  },
  {
    value: 2,
    label: "Europe/Oslo"
  },
  {
    value: 2,
    label: "Europe/Rome"
  },
  {
    value: 2,
    label: "Europe/San_Marino"
  },
  {
    value: 2,
    label: "Europe/Stockholm"
  },
  {
    value: 2,
    label: "Europe/Vaduz"
  },
  {
    value: 2,
    label: "Europe/Vatican"
  },
  {
    value: 2,
    label: "Europe/Vienna"
  },
  {
    value: 2,
    label: "Europe/Zurich"
  },
  {
    value: 2,
    label: "Europe/Belgrade"
  },
  {
    value: 2,
    label: "Europe/Bratislava"
  },
  {
    value: 2,
    label: "Europe/Budapest"
  },
  {
    value: 2,
    label: "Europe/Ljubljana"
  },
  {
    value: 2,
    label: "Europe/Podgorica"
  },
  {
    value: 2,
    label: "Europe/Prague"
  },
  {
    value: 2,
    label: "Europe/Tirane"
  },
  {
    value: 2,
    label: "Africa/Ceuta"
  },
  {
    value: 2,
    label: "Europe/Brussels"
  },
  {
    value: 2,
    label: "Europe/Copenhagen"
  },
  {
    value: 2,
    label: "Europe/Madrid"
  },
  {
    value: 2,
    label: "Europe/Paris"
  },
  {
    value: 2,
    label: "Europe/Sarajevo"
  },
  {
    value: 2,
    label: "Europe/Skopje"
  },
  {
    value: 2,
    label: "Europe/Warsaw"
  },
  {
    value: 2,
    label: "Europe/Zagreb"
  },
  {
    value: 1,
    label: "Africa/Algiers"
  },
  {
    value: 1,
    label: "Africa/Bangui"
  },
  {
    value: 1,
    label: "Africa/Brazzaville"
  },
  {
    value: 1,
    label: "Africa/Douala"
  },
  {
    value: 1,
    label: "Africa/Kinshasa"
  },
  {
    value: 1,
    label: "Africa/Lagos"
  },
  {
    value: 1,
    label: "Africa/Libreville"
  },
  {
    value: 1,
    label: "Africa/Luanda"
  },
  {
    value: 1,
    label: "Africa/Malabo"
  },
  {
    value: 1,
    label: "Africa/Ndjamena"
  },
  {
    value: 1,
    label: "Africa/Niamey"
  },
  {
    value: 1,
    label: "Africa/Porto-Novo"
  },
  {
    value: 1,
    label: "Africa/Tunis"
  },
  {
    value: 1,
    label: "Etc/GMT-1"
  },
  {
    value: 1,
    label: "Africa/Windhoek"
  },
  {
    value: 3,
    label: "Asia/Nicosia"
  },
  {
    value: 3,
    label: "Europe/Athens"
  },
  {
    value: 3,
    label: "Europe/Bucharest"
  },
  {
    value: 3,
    label: "Europe/Chisinau"
  },
  {
    value: 3,
    label: "Asia/Beirut"
  },
  {
    value: 2,
    label: "Africa/Cairo"
  },
  {
    value: 3,
    label: "Asia/Damascus"
  },
  {
    value: 3,
    label: "Asia/Nicosia"
  },
  {
    value: 3,
    label: "Europe/Athens"
  },
  {
    value: 3,
    label: "Europe/Bucharest"
  },
  {
    value: 3,
    label: "Europe/Chisinau"
  },
  {
    value: 3,
    label: "Europe/Helsinki"
  },
  {
    value: 3,
    label: "Europe/Kiev"
  },
  {
    value: 3,
    label: "Europe/Mariehamn"
  },
  {
    value: 3,
    label: "Europe/Nicosia"
  },
  {
    value: 3,
    label: "Europe/Riga"
  },
  {
    value: 3,
    label: "Europe/Sofia"
  },
  {
    value: 3,
    label: "Europe/Tallinn"
  },
  {
    value: 3,
    label: "Europe/Uzhgorod"
  },
  {
    value: 3,
    label: "Europe/Vilnius"
  },
  {
    value: 3,
    label: "Europe/Zaporozhye"
  },
  {
    value: 2,
    label: "Africa/Blantyre"
  },
  {
    value: 2,
    label: "Africa/Bujumbura"
  },
  {
    value: 2,
    label: "Africa/Gaborone"
  },
  {
    value: 2,
    label: "Africa/Harare"
  },
  {
    value: 2,
    label: "Africa/Johannesburg"
  },
  {
    value: 2,
    label: "Africa/Kigali"
  },
  {
    value: 2,
    label: "Africa/Lubumbashi"
  },
  {
    value: 2,
    label: "Africa/Lusaka"
  },
  {
    value: 2,
    label: "Africa/Maputo"
  },
  {
    value: 2,
    label: "Africa/Maseru"
  },
  {
    value: 2,
    label: "Africa/Mbabane"
  },
  {
    value: 2,
    label: "Etc/GMT-2"
  },
  {
    value: 3,
    label: "Europe/Helsinki"
  },
  {
    value: 3,
    label: "Europe/Kiev"
  },
  {
    value: 3,
    label: "Europe/Mariehamn"
  },
  {
    value: 3,
    label: "Europe/Riga"
  },
  {
    value: 3,
    label: "Europe/Sofia"
  },
  {
    value: 3,
    label: "Europe/Tallinn"
  },
  {
    value: 3,
    label: "Europe/Uzhgorod"
  },
  {
    value: 3,
    label: "Europe/Vilnius"
  },
  {
    value: 3,
    label: "Europe/Zaporozhye"
  },
  {
    value: 3,
    label: "Europe/Istanbul"
  },
  {
    value: 3,
    label: "Asia/Jerusalem"
  },
  {
    value: 2,
    label: "Africa/Tripoli"
  },
  {
    value: 3,
    label: "Asia/Amman"
  },
  {
    value: 3,
    label: "Asia/Baghdad"
  },
  {
    value: 3,
    label: "Europe/Kaliningrad"
  },
  {
    value: 3,
    label: "Asia/Aden"
  },
  {
    value: 3,
    label: "Asia/Bahrain"
  },
  {
    value: 3,
    label: "Asia/Kuwait"
  },
  {
    value: 3,
    label: "Asia/Qatar"
  },
  {
    value: 3,
    label: "Asia/Riyadh"
  },
  {
    value: 3,
    label: "Africa/Addis_Ababa"
  },
  {
    value: 3,
    label: "Africa/Asmera"
  },
  {
    value: 3,
    label: "Africa/Dar_es_Salaam"
  },
  {
    value: 3,
    label: "Africa/Djibouti"
  },
  {
    value: 3,
    label: "Africa/Juba"
  },
  {
    value: 3,
    label: "Africa/Kampala"
  },
  {
    value: 3,
    label: "Africa/Khartoum"
  },
  {
    value: 3,
    label: "Africa/Mogadishu"
  },
  {
    value: 3,
    label: "Africa/Nairobi"
  },
  {
    value: 3,
    label: "Antarctica/Syowa"
  },
  {
    value: 3,
    label: "Etc/GMT-3"
  },
  {
    value: 3,
    label: "Indian/Antananarivo"
  },
  {
    value: 3,
    label: "Indian/Comoro"
  },
  {
    value: 3,
    label: "Indian/Mayotte"
  },
  {
    value: 3,
    label: "Europe/Kirov"
  },
  {
    value: 3,
    label: "Europe/Moscow"
  },
  {
    value: 3,
    label: "Europe/Simferopol"
  },
  {
    value: 3,
    label: "Europe/Volgograd"
  },
  {
    value: 3,
    label: "Europe/Minsk"
  },
  {
    value: 4,
    label: "Europe/Astrakhan"
  },
  {
    value: 4,
    label: "Europe/Samara"
  },
  {
    value: 4,
    label: "Europe/Ulyanovsk"
  },
  {
    value: 4.5,
    label: "Asia/Tehran"
  },
  {
    value: 4,
    label: "Asia/Dubai"
  },
  {
    value: 4,
    label: "Asia/Muscat"
  },
  {
    value: 4,
    label: "Etc/GMT-4"
  },
  {
    value: 5,
    label: "Asia/Baku"
  },
  {
    value: 4,
    label: "Indian/Mahe"
  },
  {
    value: 4,
    label: "Indian/Mauritius"
  },
  {
    value: 4,
    label: "Indian/Reunion"
  },
  {
    value: 4,
    label: "Asia/Tbilisi"
  },
  {
    value: 4,
    label: "Asia/Yerevan"
  },
  {
    value: 4.5,
    label: "Asia/Kabul"
  },
  {
    value: 5,
    label: "Antarctica/Mawson"
  },
  {
    value: 5,
    label: "Asia/Aqtau"
  },
  {
    value: 5,
    label: "Asia/Aqtobe"
  },
  {
    value: 5,
    label: "Asia/Ashgabat"
  },
  {
    value: 5,
    label: "Asia/Dushanbe"
  },
  {
    value: 5,
    label: "Asia/Oral"
  },
  {
    value: 5,
    label: "Asia/Samarkand"
  },
  {
    value: 5,
    label: "Asia/Tashkent"
  },
  {
    value: 5,
    label: "Etc/GMT-5"
  },
  {
    value: 5,
    label: "Indian/Kerguelen"
  },
  {
    value: 5,
    label: "Indian/Maldives"
  },
  {
    value: 5,
    label: "Asia/Yekaterinburg"
  },
  {
    value: 5,
    label: "Asia/Karachi"
  },
  {
    value: 5.5,
    label: "Asia/Kolkata"
  },
  {
    value: 5.5,
    label: "Asia/Calcutta"
  },
  {
    value: 5.5,
    label: "Asia/Colombo"
  },
  {
    value: 5.75,
    label: "Asia/Kathmandu"
  },
  {
    value: 6,
    label: "Antarctica/Vostok"
  },
  {
    value: 6,
    label: "Asia/Almaty"
  },
  {
    value: 6,
    label: "Asia/Bishkek"
  },
  {
    value: 6,
    label: "Asia/Qyzylorda"
  },
  {
    value: 6,
    label: "Asia/Urumqi"
  },
  {
    value: 6,
    label: "Etc/GMT-6"
  },
  {
    value: 6,
    label: "Indian/Chagos"
  },
  {
    value: 6,
    label: "Asia/Dhaka"
  },
  {
    value: 6,
    label: "Asia/Thimphu"
  },
  {
    value: 6.5,
    label: "Asia/Rangoon"
  },
  {
    value: 6.5,
    label: "Indian/Cocos"
  },
  {
    value: 7,
    label: "Antarctica/Davis"
  },
  {
    value: 7,
    label: "Asia/Bangkok"
  },
  {
    value: 7,
    label: "Asia/Hovd"
  },
  {
    value: 7,
    label: "Asia/Jakarta"
  },
  {
    value: 7,
    label: "Asia/Phnom_Penh"
  },
  {
    value: 7,
    label: "Asia/Pontianak"
  },
  {
    value: 7,
    label: "Asia/Saigon"
  },
  {
    value: 7,
    label: "Asia/Vientiane"
  },
  {
    value: 7,
    label: "Etc/GMT-7"
  },
  {
    value: 7,
    label: "Indian/Christmas"
  },
  {
    value: 7,
    label: "Asia/Novokuznetsk"
  },
  {
    value: 7,
    label: "Asia/Novosibirsk"
  },
  {
    value: 7,
    label: "Asia/Omsk"
  },
  {
    value: 8,
    label: "Asia/Hong_Kong"
  },
  {
    value: 8,
    label: "Asia/Macau"
  },
  {
    value: 8,
    label: "Asia/Shanghai"
  },
  {
    value: 8,
    label: "Asia/Krasnoyarsk"
  },
  {
    value: 8,
    label: "Asia/Brunei"
  },
  {
    value: 8,
    label: "Asia/Kuala_Lumpur"
  },
  {
    value: 8,
    label: "Asia/Kuching"
  },
  {
    value: 8,
    label: "Asia/Makassar"
  },
  {
    value: 8,
    label: "Asia/Manila"
  },
  {
    value: 8,
    label: "Asia/Singapore"
  },
  {
    value: 8,
    label: "Etc/GMT-8"
  },
  {
    value: 8,
    label: "Antarctica/Casey"
  },
  {
    value: 8,
    label: "Australia/Perth"
  },
  {
    value: 8,
    label: "Asia/Taipei"
  },
  {
    value: 8,
    label: "Asia/Choibalsan"
  },
  {
    value: 8,
    label: "Asia/Ulaanbaatar"
  },
  {
    value: 8,
    label: "Asia/Irkutsk"
  },
  {
    value: 9,
    label: "Asia/Dili"
  },
  {
    value: 9,
    label: "Asia/Jayapura"
  },
  {
    value: 9,
    label: "Asia/Tokyo"
  },
  {
    value: 9,
    label: "Etc/GMT-9"
  },
  {
    value: 9,
    label: "Pacific/Palau"
  },
  {
    value: 9,
    label: "Asia/Pyongyang"
  },
  {
    value: 9,
    label: "Asia/Seoul"
  },
  {
    value: 9.5,
    label: "Australia/Adelaide"
  },
  {
    value: 9.5,
    label: "Australia/Broken_Hill"
  },
  {
    value: 9.5,
    label: "Australia/Darwin"
  },
  {
    value: 10,
    label: "Australia/Brisbane"
  },
  {
    value: 10,
    label: "Australia/Lindeman"
  },
  {
    value: 10,
    label: "Australia/Melbourne"
  },
  {
    value: 10,
    label: "Australia/Sydney"
  },
  {
    value: 10,
    label: "Antarctica/DumontDUrville"
  },
  {
    value: 10,
    label: "Etc/GMT-10"
  },
  {
    value: 10,
    label: "Pacific/Guam"
  },
  {
    value: 10,
    label: "Pacific/Port_Moresby"
  },
  {
    value: 10,
    label: "Pacific/Saipan"
  },
  {
    value: 10,
    label: "Pacific/Truk"
  },
  {
    value: 10,
    label: "Australia/Currie"
  },
  {
    value: 10,
    label: "Australia/Hobart"
  },
  {
    value: 9,
    label: "Asia/Chita"
  },
  {
    value: 9,
    label: "Asia/Khandyga"
  },
  {
    value: 9,
    label: "Asia/Yakutsk"
  },
  {
    value: 11,
    label: "Antarctica/Macquarie"
  },
  {
    value: 11,
    label: "Etc/GMT-11"
  },
  {
    value: 11,
    label: "Pacific/Efate"
  },
  {
    value: 11,
    label: "Pacific/Guadalcanal"
  },
  {
    value: 11,
    label: "Pacific/Kosrae"
  },
  {
    value: 11,
    label: "Pacific/Noumea"
  },
  {
    value: 11,
    label: "Pacific/Ponape"
  },
  {
    value: 11,
    label: "Asia/Sakhalin"
  },
  {
    value: 11,
    label: "Asia/Ust-Nera"
  },
  {
    value: 11,
    label: "Asia/Vladivostok"
  },
  {
    value: 12,
    label: "Antarctica/McMurdo"
  },
  {
    value: 12,
    label: "Pacific/Auckland"
  },
  {
    value: 12,
    label: "Etc/GMT-12"
  },
  {
    value: 12,
    label: "Pacific/Funafuti"
  },
  {
    value: 12,
    label: "Pacific/Kwajalein"
  },
  {
    value: 12,
    label: "Pacific/Majuro"
  },
  {
    value: 12,
    label: "Pacific/Nauru"
  },
  {
    value: 12,
    label: "Pacific/Tarawa"
  },
  {
    value: 12,
    label: "Pacific/Wake"
  },
  {
    value: 12,
    label: "Pacific/Wallis"
  },
  {
    value: 12,
    label: "Pacific/Fiji"
  },
  {
    value: 12,
    label: "Asia/Anadyr"
  },
  {
    value: 12,
    label: "Asia/Kamchatka"
  },
  {
    value: 12,
    label: "Asia/Magadan"
  },
  {
    value: 12,
    label: "Asia/Srednekolymsk"
  },
  {
    value: 13,
    label: "Asia/Kamchatka"
  },
  {
    value: 13,
    label: "Etc/GMT-13"
  },
  {
    value: 13,
    label: "Pacific/Enderbury"
  },
  {
    value: 13,
    label: "Pacific/Fakaofo"
  },
  {
    value: 13,
    label: "Pacific/Tongatapu"
  },
  {
    value: 13,
    label: "Pacific/Apia"
  }
];

export default timeZoneData;
