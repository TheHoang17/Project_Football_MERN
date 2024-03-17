import { Box } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

function PaginationRounded() {
  return (
    <Box >
      <Stack spacing={2} sx={{ alignItems: 'center' }}>
        <Pagination count={10} shape="rounded" size="large" />
      </Stack>
    </Box>
  )
}

export default PaginationRounded