import { Viewer, Worker } from '@react-pdf-viewer/core'
import { RenderDownloadProps, getFilePlugin } from '@react-pdf-viewer/get-file'
import '@react-pdf-viewer/core/lib/styles/index.css'

interface PdfProps {
  url: string
  download?: boolean
}

export const Pdf = (props: PdfProps) => {
  const { url, download = true } = props
  const getFilePluginInstance = getFilePlugin()
  const { Download } = getFilePluginInstance

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
      <Viewer fileUrl={url} plugins={[getFilePluginInstance]} />
      {download && (
        <Download>
          {(props: RenderDownloadProps) => (
            <DownloadIcon click={props.onClick} />
          )}
        </Download>
      )}
    </Worker>
  )
}

const DownloadIcon = (props: { click: () => void }) => {
  const { click } = props

  return (
    <div className="download" title="Download" onClick={click}>
      <svg
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2014"
        width="1em"
        height="1em"
      >
        <path
          d="M32 544v320s0 128 128 128h704c64 0 128-32.128 128-128v-64-256h-64v320s0 64-64 64h-704s-64 0-64-64v-320"
          p-id="2015"
          fill="#515151"
        />
        <path
          d="M480 707.968l-57.152-57.152-45.248 45.248 90.048 90.048-0.448 0.512 45.248 45.248 0.448-0.512 0.448 0.512 45.248-45.248-0.448-0.512 90.048-90.048-45.248-45.248-58.944 59.008V32h-64v675.968z"
          p-id="2016"
          fill="#515151"
        />
      </svg>
    </div>
  )
}
