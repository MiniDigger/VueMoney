<template>
    <b-modal :id="id" lazy title="New Entry"
             @ok="handleOk" @cancel="handleCancel" @hide="handleCancel">
        <b-form-group description="Enter the title for the entry"
                      label="Title"
                      label-for="title"
                      :invalid-feedback="titleInvalid"
                      :state="titleState">
            <b-form-input
                    id="title"
                    v-model="title"
                    type="text"
                    required trim
                    placeholder="Enter Title"
                    :state="titleState"
            ></b-form-input>
        </b-form-group>

        <b-form-group description="Enter the type for the entry"
                      label="Type"
                      label-for="type"
                      :invalid-feedback="typeInvalid"
                      :state="typeState">
            <b-form-select v-model="type" required id="type" :state="typeState">
                <template slot="first">
                    <option :value="null" disabled>-- Please select an option --</option>
                </template>
                <option v-for="type in types()" v-if="isNaN(Number(type))" :value="type">{{type}}</option>
            </b-form-select>
        </b-form-group>

        <b-form-group description="Enter the type for the entry"
                      label="Amount"
                      label-for="amount"
                      :invalid-feedback="amountInvalid"
                      :state="amountState">
            <b-form-input
                    v-model="amount"
                    type="number"
                    required
                    placeholder="Enter Amount"
                    id="amount"
                    :state="amountState"
            ></b-form-input>
        </b-form-group>
    </b-modal>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {getModule} from "vuex-module-decorators";
import Entries from "@/store/modules/entries";
import {Entry, EntryType} from "@/types/entry";
import {BvModalEvent} from "bootstrap-vue-shims";
import UUIDUtils from "@/utils/UUIDUtils";

@Component
export default class NewEntryComponent extends Vue {

    get titleInvalid(): string {
        if (this.title.length > 3) {
            return "";
        } else if (this.title.length > 0) {
            return "Enter at least 4 characters";
        } else {
            return "Please enter something";
        }
    }

    get titleState(): boolean {
        return this.title.length > 3;
    }

    get typeInvalid(): string {
        return "Please select something from the dropdown";
    }

    get typeState(): boolean {
        return this.type != null && this.type != -1;
    }

    get amountInvalid(): string {
        return "Please enter a valid number larger than zero";
    }

    get amountState(): boolean {
        return !isNaN(this.amount) && this.amount > 0;
    }

    public title: string = "";
    public type: EntryType = -1;
    public amount: number = 0;
    @Prop() private id!: string;

    private entryModule = getModule(Entries);

    public types(): EntryType[] {
        return Object.values(EntryType);
    }

    public handleOk(event: BvModalEvent) {
        this.entryModule.getEntries.push(new Entry(UUIDUtils.generateUUID(), this.type, this.title, this.amount));
        this.reset();
    }

    public handleCancel(event: BvModalEvent) {
        this.reset();
    }

    public reset(): void {
        this.title = "";
        this.type = -1;
        this.amount = 0;
}

    // TODO handle enter and ok here
    // TODO initial focus on title
    // TODO disable ok button until all valid
    // TODO don't make everything red initially, only after first typing
}
</script>
