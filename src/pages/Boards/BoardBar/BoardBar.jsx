import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatter'
const MENU_STYLE ={
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root':{
    color:'white'
  },
  '&:hover':{
    bgcolor:'primary.50'
  }
}
function BoardBar({ board }) {
  return (
    <Box sx={{
      // backgroundColor: 'primary.dark',
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e': '#1976d2')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label={board?.title}
          // clickable
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          // clickable
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          // clickable
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          // clickable
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filters"
          // clickable
          onClick={() => {}}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon/>}
          sx={{
            color:'white',
            borderColor:'white',
            '&:hover': { borderColor: 'white' }
          }}
        >Invite</Button>
        <AvatarGroup
          max={4}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type':{ bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title="Hoang Dev">
            <Avatar
              alt="Hoang"
              src = "https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-1/157961237_1328089080905245_5171334421315568845_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeF99CmdNvNFHeSE2X2oAF2bSiHTP0RPzcdKIdM_RE_Nx8FryIGP6oPYsu-I6EnZ7dnlIf60FJas0IwShb7FDy2G&_nc_ohc=T2gabBaRy6YAX-kzG00&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDXqhVQm03Owg9ZYPIvvzib8v6aGE5oHSL4fYlIydEgBQ&oe=65F32830"/>
          </Tooltip>
          <Tooltip title="Hoang Dev">
            <Avatar
              alt="Hoang"
              src = "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/272123910_1553133368400814_5752687317139459703_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeGSqc_jO-OqOblDI4cuV2UwsnFuKxrvq9aycW4rGu-r1s90xM2oTW78knBNoFCU8OkqzigaDyG6CKBVvcwhTwzL&_nc_ohc=JuM6KkrUM4AAX_7RaOF&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfAdcu8yKfGhUwk8FnJABKNpVtCXuxJ-rrEvm2oE2KOWlA&oe=65D199C5"/>
          </Tooltip>
          <Tooltip title="Hoang Dev">
            <Avatar
              alt="Hoang"
              src = "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/256840069_1509828792731272_7074239505176475489_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeH0hoJvv_7fmyQKkgQ0ozsya-6uc4otuDlr7q5zii24OaL84jiDU2GVLInYB2un84w7KktwnMorkoLLERlmEs2D&_nc_ohc=yOow7w9LwZgAX8u6CWI&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDPk_su6qVWN12k5g6KQv8Qqol9jTyp0ITruAFv2B6w6Q&oe=65D0EC4E"/>
          </Tooltip>
          <Tooltip title="Hoang Dev">
            <Avatar
              alt="Hoang"
              src = "https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-1/157961237_1328089080905245_5171334421315568845_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeF99CmdNvNFHeSE2X2oAF2bSiHTP0RPzcdKIdM_RE_Nx8FryIGP6oPYsu-I6EnZ7dnlIf60FJas0IwShb7FDy2G&_nc_ohc=T2gabBaRy6YAX-kzG00&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDXqhVQm03Owg9ZYPIvvzib8v6aGE5oHSL4fYlIydEgBQ&oe=65F32830"/>
          </Tooltip>
          <Tooltip title="Hoang Dev">
            <Avatar
              alt="Hoang"
              src = "https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-1/157961237_1328089080905245_5171334421315568845_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeF99CmdNvNFHeSE2X2oAF2bSiHTP0RPzcdKIdM_RE_Nx8FryIGP6oPYsu-I6EnZ7dnlIf60FJas0IwShb7FDy2G&_nc_ohc=T2gabBaRy6YAX-kzG00&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDXqhVQm03Owg9ZYPIvvzib8v6aGE5oHSL4fYlIydEgBQ&oe=65F32830"/>
          </Tooltip>
        </AvatarGroup>
      </Box>

    </Box>
  )
}

export default BoardBar