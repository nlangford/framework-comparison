<template>
<div class="card">
    <div class="card-header" style="text-transform: 'capitalize', font-weight: 'bold' ">
        {{list.name}}
    </div>
    <ul class="list-group list-group-flush">
        <li v-for="(item, index) in list.items" v-bind:key="index" class="list-group-item">
            <span v-bind:class="{complete: item.completed}">{{item.name}}</span>
            <input v-model="item.completed" v-on:change="updateList(list)" type="checkbox" class="float-right" />
        </li>
        <li class="list-group-item">
            <button class="btn btn-primary" data-toggle="modal" v-bind:data-target="'#'+edit">Edit</button>
            <button class="btn btn-secondary" v-on:click="deleteList(list._id)" data-toggle="modal" data-target="#deleteModal">Delete</button>
        </li>
    </ul>
    <editmodal v-bind:confirm="updateList" v-bind:list="list" v-bind:id="edit"></editmodal>
</div>
</template>

<script>
import editmodal from './EditModal'

export default {
  name: 'list',
  props: ['list', 'updateList', 'deleteList'],
  components: {
    editmodal
  },
  data () {
    return {
      edit: 'edit-modal-' + this.list._id
    }
  }
}
</script>

<style>
.complete {
  text-decoration: line-through;
}
</style>
