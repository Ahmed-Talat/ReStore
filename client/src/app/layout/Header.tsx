import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Prop {
    darkMode: boolean;
    handleThemeChanged: () => void;
}

export default function Header({ darkMode, handleThemeChanged }: Prop) {
    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar>
                <Typography variant='h6'>
                    RE-STORE
                </Typography>
                <Switch checked={darkMode} onChange={handleThemeChanged} />
            </Toolbar>
        </AppBar>
    );
}