import { NgModule } from "@angular/core";
import { RouterModule, Routes, RoutesRecognized } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { EditVenueComponent } from "./admin/venue/edit-venue/edit-venue.component";
import { VenueComponent } from "./admin/venue/venue.component";
import { ViewVenueComponent } from "./admin/venue/view-venue/view-venue.component";
import { AddVenueComponent } from "./admin/venue/add-venue/add-venue.component";
import { DisplayuserComponent } from "./displayuser/displayuser.component";
import { EditUserComponent } from "./displayuser/edit-user/edit-user.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { RefreeComponent } from "./admin/refree/refree.component";
import { AddRefreeComponent } from "./admin/refree/add-refree/add-refree.component";
import { EditRefreeComponent } from "./admin/refree/edit-refree/edit-refree.component";
import { DeleteRefreeComponent } from "./admin/refree/delete-refree/delete-refree.component";
import { TeamsComponent } from "./admin/teams/teams.component";
import { EditTeamComponent } from "./admin/teams/edit-team/edit-team.component";
const appRoutes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: 'full' },
    { path: "login", component: LoginComponent },
    { path: "homepage", component: HomepageComponent },
    { path: "signup", component: SignupComponent },


    {
        path: "admin",
        component: AdminComponent,
        children: [
            { path: "display", component: DisplayuserComponent },

            { path: 'view', component: ViewVenueComponent },
            { path: 'edit', component: EditVenueComponent },
            { path: 'addVenue', component: AddVenueComponent },
            { path: 'refree', component: RefreeComponent },
            { path: 'addRefree', component: AddRefreeComponent },
            { path: 'editRefree', component: EditRefreeComponent },
            { path: 'deleteRefree', component: DeleteRefreeComponent },
            {path:'teams',component:TeamsComponent},
            {path:'editTeam',component:EditTeamComponent}

        ]
    }]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
}
)
export class AppRoutingModule {

}