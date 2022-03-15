import { useState } from 'react'

export const useApproval = (onPresentApprove: () => void) => {
  const [requestedApproval, setRequestedApproval] = useState(false)

  return { requestedApproval }
}

export default useApproval
