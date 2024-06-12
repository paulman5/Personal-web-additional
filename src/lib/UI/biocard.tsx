import * as React from "react"
import Avatar from "@mui/joy/Avatar"
import Chip from "@mui/joy/Chip"
import Box from "@mui/joy/Box"
import Button from "@mui/joy/Button"
import ButtonGroup from "@mui/joy/ButtonGroup"
import Card from "@mui/joy/Card"
import CardContent from "@mui/joy/CardContent"
import CardOverflow from "@mui/joy/CardOverflow"
import CardActions from "@mui/joy/CardActions"
import IconButton from "@mui/joy/IconButton"
import Typography from "@mui/joy/Typography"
import SvgIcon from "@mui/joy/SvgIcon"
import { StaticImageData } from "next/image"
import { Closebutton } from "../icons/closebutton"
import { Tooltip as ReactTooltip } from "react-tooltip"

interface BioCardProps {
  avatarSrc: StaticImageData
  chipLabel?: string
  fullname: string
  bio: string
  closeModal: () => void
  isCopied: boolean
  setIsCopied: React.Dispatch<React.SetStateAction<boolean>>
}

export default function BioCard({
  avatarSrc,
  chipLabel,
  fullname,
  bio,
  closeModal,
  isCopied,
  setIsCopied,
}: BioCardProps) {
  function copyToClipboard() {
    navigator.clipboard.writeText("mierlo.paul@hotmail.nl")
  }

  return (
    <Card
      sx={{
        width: 320,
        maxWidth: "100%",
        boxShadow: "lg",
      }}
    >
      <div className="flex w-1/12" style={{ justifyContent: "end" }}>
        <button
          onClick={closeModal}
          className="cursor-pointer hover:bg-opacity-35 hover:bg-slate-300 transition-all w-auto"
        >
          <Closebutton />
        </button>
      </div>
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <Avatar src={avatarSrc.src} sx={{ "--Avatar-size": "4rem" }} />
        <Chip
          size="sm"
          variant="soft"
          color="primary"
          sx={{
            mt: -1,
            mb: 1,
            border: "3px solid",
            borderColor: "background.surface",
          }}
        >
          {chipLabel}
        </Chip>
        <Typography level="title-lg">{fullname}</Typography>
        <Typography level="body-sm" sx={{ maxWidth: "24ch" }}>
          {bio}
        </Typography>
      </CardContent>
      <CardOverflow sx={{ bgcolor: "background.level1" }}>
        <CardActions buttonFlex="1">
          <ButtonGroup
            variant="outlined"
            sx={{ bgcolor: "background.surface" }}
          >
            <Button
              data-tooltip-id="my-tooltip-1"
              onClick={() => {
                copyToClipboard()
                setIsCopied(true)
              }}
              onMouseOut={() => setTimeout(() => setIsCopied(false), 150)}
              className="my-email font-semibold cursor-pointer rounded-md"
            >
              Contact
            </Button>
            {isCopied ? (
              <ReactTooltip
                id="my-tooltip-1"
                place="bottom"
                content="Email copied to clipboard"
              />
            ) : (
              <ReactTooltip
                id="my-tooltip-1"
                place="bottom"
                content="Click to copy to copy email"
              />
            )}
          </ButtonGroup>
        </CardActions>
      </CardOverflow>
    </Card>
  )
}
