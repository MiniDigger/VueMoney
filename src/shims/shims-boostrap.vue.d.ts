declare module "bootstrap-vue-shims" {

    export interface BvModalEvent extends BvEvent {
        modalId: string;
    }

    export interface BvEvent {
        type: string;
        cancelable: boolean;

        preventDefault(): void;
    }
}

