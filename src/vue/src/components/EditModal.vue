<template>
    <div class="modal fade" v-bind:id="id"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editModalLabel">Edit List</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <input v-model="list.name" name="name" class="form-control" style="font-weight: 'bold'" placeholder="List Name" required />
                        </div>
                        <div v-for="(list, index) in list.items" v-bind:key="index" class="form-group">
                            <div class="input-group">
                                <input v-model="list.name" name="list-item" class="form-control" placeholder="List Item" required />
                                <div class="input-group-append">
                                    <button v-on:click="removeItem(index)" type="button" class="btn btn-outline-danger">X</button>
                                </div>
                            </div>
                        </div>
                        <button v-on:click="addEmptyItem()" type="button" class="btn btn-outline-primary form-control">+</button>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" v-on:click="confirm(list)" data-dismiss="modal">Save changes</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'editmodal',
  methods: {
    removeItem (index) {
      let newList = Object.assign({}, this.list)
      newList.items.splice(index, 1)

      this.list = newList
    },
    addEmptyItem () {
      let newList = Object.assign({}, this.list)
      newList.items.push(Object.assign({}, this.emptyItem))

      this.list = newList
    }
  },
  props: ['id', 'list', 'confirm'],
  data () {
    return {
      emptyItem: { name: '', completed: false }
    }
  }
}
</script>
