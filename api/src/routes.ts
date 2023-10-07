import { UserController } from "./controller/UserController"
import { QuestaoController } from "./controller/QuestaoController"
import { CardController } from "./controller/CardController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},{
    method: "get",
    route: "/questoes",
    controller: QuestaoController,
    action: "all"
}, {
    method: "get",
    route: "/questoes/:id",
    controller: QuestaoController,
    action: "one"
}, {
    method: "post",
    route: "/questoes",
    rout: "/questoes",
    controller: QuestaoController,
    action: "save"
}, {
    method: "delete",
    route: "/questoes/:id",
    controller: QuestaoController,
    action: "remove"
},{
    method: "get",
    route: "/cards",
    controller: CardController,
    action: "all"
}, {
    method: "get",
    route: "/cards/:id",
    controller: CardController,
    action: "one"
}, {
    method: "post",
    route: "/cards",
    controller: CardController,
    action: "save"
}, {
    method: "delete",
    route: "/cards/:id",
    controller: CardController,
    action: "remove"
}]