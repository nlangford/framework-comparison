<template>
    <div class="modal fade" v-bind:id="id"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editModalLabel">Delete List</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Are you sure you want to delete {{list.name}}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" v-on:click="confirm(list._id)" data-dismiss="modal">Delete</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'confirmmodal',
  props: ['id', 'list', 'confirm']
}
</script>
