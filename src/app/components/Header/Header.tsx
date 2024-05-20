import { CompanyMetadata } from "@/app/models/company-metadata";
import { AppBar, Divider, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import { grey } from "@mui/material/colors";

interface Props {
  companyId: string;
}

export async function Header({ companyId }: Props) {
  const metadata: CompanyMetadata = await import(
    `@/app/assets/companies-metadata/${companyId}.json`
  );

  return (
    <AppBar sx={{ boxShadow: 0 }} position="static">
      <Toolbar
        sx={{
          bgcolor: "white",
          display: "flex",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Image src={metadata.logoUrl} width={137} height={24} alt={"Logo"} />
        <Divider
          color={grey[300]}
          orientation={"vertical"}
          sx={{ height: "32px", mx: 4 }}
        />
        <Typography
          sx={{ color: grey[800], flexGrow: 1 }}
          variant="h6"
          component="div"
        >
          {metadata.description}
        </Typography>
        <Image
          src={"logos/qipt-logo.svg"}
          alt={"Qipt logo"}
          width={64}
          height={32}
        />
      </Toolbar>
    </AppBar>
  );
}
