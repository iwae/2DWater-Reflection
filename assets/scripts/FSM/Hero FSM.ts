import { _decorator, Node, Vec3, RigidBody, Collider } from "cc";
import { SpriteAnimation } from "../Widget/SpriteAnimation";
import BhvFSM from "./BhvFSM";

const { ccclass, property,disallowMultiple } = _decorator;
const _v1 /* as temp Vec3 */ = new Vec3();

export const STATE = {
    Random: "Random",
    Forward: "Forward",
    Idle: "Idle",
    WalkLeft: "WalkLeft",
    WalkRight: "WalkRight",
    Atk: "Atk",
    Stop: "Stop",
    Jump: "Jump",
}

@ccclass("Hero FSM")
@disallowMultiple(true)

export default class HeroFSM extends BhvFSM {

    @property(SpriteAnimation)
    anm:SpriteAnimation =null;

    static ins:HeroFSM = null;

    onEnable(){
        this.RemoveAllState()
        this.addStates(STATE);
        HeroFSM.ins=this;
        this.changeState(STATE.Idle);


    }

    onDisable(){
        this.RemoveAllState()
        HeroFSM.ins=null;

    }

    onIdleEnter() {
        this.anm.Anmimation=0;
    }


    onIdleUpdate() {
     

    }


    onWalkLeftEnter() {
        if(this.anm.Anmimation!=1)this.anm.Anmimation=1;
        this.node.setScale(-1,1)
    }


    onWalkLeftUpdate() {
        _v1.set(this.node.position);
        _v1.x -=2;
        if(_v1.x>-720)
        this.node.setPosition(_v1);
    }

    onWalkRightEnter() {
        if(this.anm.Anmimation!=1)this.anm.Anmimation=1;
        this.node.setScale(1,1)
    }


    onWalkRightUpdate() {
        _v1.set(this.node.position);
        _v1.x +=2;
        if(_v1.x<720)
        this.node.setPosition(_v1);
    }


   

}